FactoryBot.define do
  factory :pet do
    name { Faker::Dog.name }
    location { Faker::Address.city }
    description { Faker::GameOfThrones.quote }
    tag { Faker::Lorem.words }
  end
end
