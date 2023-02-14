# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Schools
require './lib/get_requester.rb'
schools = GetRequester.new('http://universities.hipolabs.com/search?country=United+States').parse_json

schools.map { |school| 
    puts school["domains"] 
}

100.times {
    
}
# Users
Faker::Internet.password

# Profiles
# https://100k-faces.glitch.me/random-image-url
Faker::Name.first_name_neutral
Faker::Name.last_name
Faker::Gender.type

Faker::Hobby.activity

Faker::Address.city
Faker::Address.state_abbr