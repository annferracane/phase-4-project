class Profile < ApplicationRecord
    belongs_to :user

    validates :price, presence: true
end


t.string "first_name"
t.string "last_name"
t.string "image"
t.string "city"
t.string "state"
t.string "gender"
t.string "hobby"
t.integer "user_id"
