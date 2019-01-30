class Pet < ApplicationRecord
  validates_presence_of :name, :description, :tag, :location

  # active_storage pet pic

  # belongs_to :user
end
