class Pet < ApplicationRecord
  validates_presence_of :name, :owner, :description, :tag
  has_one_attached :image
end
