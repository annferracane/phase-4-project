class Profile < ApplicationRecord
    belongs_to :user

    validates :first_name, presence: true, length: { minimum: 2 }
    validates :last_name, presence: true, length: { minimum: 1 }
    validates :image, allow_nil: true, :url => true
    validates :state, length: { is: 2 }
    
end
