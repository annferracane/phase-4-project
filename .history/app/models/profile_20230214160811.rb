class Profile < ApplicationRecord
    belongs_to :user

    validates :first_name, presence: true
    validates :last_name, presence: true, length: { in: 6..20 }
    validates :image, 
    validates :city,
    validates :state,
    validates :gender,
    
end


t.string "first_name"
t.string "last_name"
t.string "image"
t.string "city"
t.string "state"
t.string "gender"
t.string "hobby"
t.integer "user_id"
