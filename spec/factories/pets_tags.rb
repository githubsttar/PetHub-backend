FactoryBot.define do
  factory :pet_tag do
    pet_id { Faker::Dog.name }
    tag_id { Faker::Name.first_name }
  end
end
