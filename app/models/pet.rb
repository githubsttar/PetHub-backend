class Pet < ApplicationRecord
  validates_presence_of :name, :owner, :description, :tag 
end
