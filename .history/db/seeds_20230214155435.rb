# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

require 'faker'
require './lib/get_requester.rb'

# Schools
# puts "Seeding schools..."

# schools = GetRequester.new('http://universities.hipolabs.com/search?country=United+States').parse_json

# schools.map { |school| 

#     name = school["name"] 
#     domain = school["domains"][0] 

#     School.create(name: name, domain: domain)
# }

# {"domains": ["marywood.edu"], "country": "United States", "alpha_two_code": "US", "web_pages": ["http://www.marywood.edu"], "state-province": null, "name": "Marywood University"}


# Users & Profiles
puts "Seeding users and profiles..."

2.times do
    fake_user = {
        "first_name" => Faker::Name.first_name_neutral,
        "last_name" => Faker::Name.last_name,
        "image" => Faker::Avatar.image,
        "password" => Faker::Internet.password,
        "city" => Faker::Address.city,
        "state" => Faker::Address.state_abbr,
        "gender" => Faker::Gender.type,
        "hobby" => Faker::Hobby.activity
    }

    fake_user["email"] = (fake_user["last_name"] + "." + fake_user["first_name"] + "@" + Faker::Internet.domain_name).downcase
    
    user = User.create(email: fake_user["email"], password: Faker::Internet.password)
    Profile.create(
        first_name: fake_user["first_name"], 
        last_name: fake_user["last_name"])

end