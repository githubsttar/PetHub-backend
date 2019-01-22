class PetTag < ApplicationRecord
  validates_presence_of :tag_id, :pet_id
end
