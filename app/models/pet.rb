class Pet < ApplicationRecord
  validates_presence_of :name, :owner, :description, :tag

  # active_storage pet pic
  has_one_attached :picture

  # belongs_to :user
end
