FactoryBot.define do
  factory :pet do
    name { Faker::Dog.name }
    owner { Faker::Name.first_name }
    description { Faker::GameOfThrones.quote }
    tag { Faker::Lorem.words }
  end
end
