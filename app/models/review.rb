class Review < ApplicationRecord
  validates :title, :body , presence: true

  belongs_to :reviewer,
    foreign_key: :author_id,
    class_name: :User
  belongs_to :reviewee,
    foreign_key: :user_id,
    class_name: :User
end
