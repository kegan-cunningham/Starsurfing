class Request < ApplicationRecord
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze

  validates :end_date, :start_date, :status, presence: true
  validates :status, inclusion: STATUS_STATES
  validate :start_must_come_before_end
  validate :does_not_overlap_approved_request

  after_initialize :assign_pending_status

  belongs_to :surfer,
    foreign_key: :surfer_id,
    class_name: :User

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  def approve!
    transaction do
      self.status = 'APPROVED'
      self.save!

      overlapping_pending_requests.update_all(status: 'DENIED')
    end
  end

  def approved?
    self.status == 'APPROVED'
  end

  def denied?
    self.status == 'DENIED'
  end

  def deny!
    self.status = 'DENIED'
    self.save!
  end

  def pending?
    self.status == 'PENDING'
  end

  private

  def assign_pending_status
    self.status ||= 'PENDING'
  end

  def overlapping_requests
    Request
      .where.not(id: self.id)
      .where(host_id: host_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                  start_date: start_date, end_date: end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where('status = \'APPROVED\'')
  end

  def overlapping_pending_requests
    overlapping_requests.where('status = \'PENDING\'')
  end

  def does_not_overlap_approved_request
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] <<
        'Request conflicts with existing approved request'
    end
  end

  def start_must_come_before_end
    return if start_date < end_date
    errors[:start_date] << 'must come before end date'
    errors[:end_date] << 'must come after start date'
  end

end
