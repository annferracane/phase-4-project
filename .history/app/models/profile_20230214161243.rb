class Profile < ApplicationRecord
    belongs_to :user

    validates :first_name, presence: true, length: { minimum: 2 }
    validates :last_name, presence: true, length: { minimum: 1 }
    validates :image, :url => true
    validates :state, length: { is: 1 }
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
