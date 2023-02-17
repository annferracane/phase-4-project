# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Destroy Data
Tip.destroy_all
Profile.destroy_all
User.destroy_all
School.destroy_all

# Requirements
require 'faker'
require './lib/get_requester.rb'

# Schools
puts "Seeding schools..."

schools = GetRequester.new('http://universities.hipolabs.com/search?country=United+States').parse_json

schools.map { |school| 

    name = school["name"] 
    domain = school["domains"][0] 

    School.create(name: name, domain: domain)
}


# Users & Profiles
puts "Seeding users and profiles..."

100.times do
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
    
    user = User.create(email: fake_user["email"], password: Faker::Internet.password, user_type: ["Prospective Student", "College Student", "Alum"].sample)

    Profile.create(
        first_name: fake_user["first_name"], 
        last_name: fake_user["last_name"],
        image: fake_user["image"],
        city: fake_user["city"],
        state: fake_user["state"],
        gender: fake_user["gender"],
        hobby: fake_user["hobby"],
        user_id: user.id
    )

end

# Tips
puts "Seeding tips..."

100.times do
    Tip.create(
        title: Faker::Lorem.words.to_sentence(words_connector: ' ' , last_word_connector: ' ').capitalize,
        on_or_off_campus: [true, false].sample,
        category: ['Educational', 'Social/Fun', 'Other'].sample,
        content: Faker::Lorem.paragraphs.join(' '),
        school_id: School.all.sample.id,
        user_id: User.where.not(user_type: "Prospective Student").sample.id
    )
end