class User < ApplicationRecord
  validates :username, :password_digest, :firstname, :lastname, :session_token, presence: true
  validates :hosting, inclusion: [ true, false ]
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :image, default_url: "default-user-image.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  belongs_to :star
  has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review
  has_many :reviews_about_me,
    foreign_key: :user_id,
    class_name: :Review
  # has_many :visited_stars

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
