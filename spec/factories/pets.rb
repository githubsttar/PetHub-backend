FactoryBot.define do
  factory :pets do
    name { Faker::Dog.name }
    owner { Faker::Name.first_name }
    description { Faker::GameOfThrones.quote }
  end
end
