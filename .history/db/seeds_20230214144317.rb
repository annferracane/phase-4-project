# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Schools
require './lib/get_requester.rb'
schools = GetRequester.new('http://universities.hipolabs.com/search?country=United+States').parse_json

# schools.map { |school| 
#     puts school["domains"] 
# }



# Users

rand(1..5).times do
    # get a random pizza
    pizza = Pizza.find(Pizza.pluck(:id).sample)

    RestaurantPizza.create!(restaurant_id: restaurant.id, pizza_id: pizza.id, price: rand(5..25))
  end

2.times {
    first_name = Faker::Name.first_name_neutral
    last_name = Faker::Name.last_name
    image = Faker::Avatar.image
    email = `#{ first_name }.#{ last_name }@#{ Faker::Internet.domain_name }`
    password = Faker::Internet.password
    city = Faker::Address.city
    state = Faker::Address.state_abbr
    gender = Faker::Gender.type
    hobby = Faker::Hobby.activity
}

    






# Profiles
# https://100k-faces.glitch.me/random-image-url