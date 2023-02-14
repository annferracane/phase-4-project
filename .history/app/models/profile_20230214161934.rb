class Profile < ApplicationRecord
    belongs_to :user

    validates :first_name, presence: true, length: { minimum: 2 }
    validates :last_name, presence: true, length: { minimum: 1 }
    validates :image, :url => true
    validates :state, presence: false, length: { is: 2 }
    
end
