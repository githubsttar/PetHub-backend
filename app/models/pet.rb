class Pet < ApplicationRecord
  validates_presence_of :name, :owner, :description, :tag

  # active_storage pet pic

  # belongs_to :user
end
