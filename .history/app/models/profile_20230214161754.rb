class Profile < ApplicationRecord
    belongs_to :user

    validates :first_name, presence: true, length: { minimum: 2 }
    validates :last_name, presence: true, length: { minimum: 1 }
    validates :image, presence: true,:url => true
    validates :state, length: { is: 2 }
    
end
