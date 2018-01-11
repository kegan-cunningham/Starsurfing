class Request < ApplicationRecord
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze

  validates :end_date, :start_date, :status, presence: true
  validates :status, inclusion: STATUS_STATES
  validate :start_must_come_before_end

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

  def start_must_come_before_end
    if start_date && end_date
      return if start_date < end_date
      errors[:start_date] << 'must come before departure date'
      errors[:end_date] << 'must come after arrival date'
    end
  end

end
