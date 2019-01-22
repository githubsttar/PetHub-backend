require 'rails_helper'

RSpec.describe PetTag, type: :model do
  it { should validate_presence_of (:pet_id) }
  it { should validate_presence_of (:tag_id) }
end
