class Pet < ApplicationRecord
  validates_presence_of :name, :owner, :description, :tag, :location
  has_one_attached :photo
end
