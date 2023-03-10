class Profile < ApplicationRecord
    belongs_to :user

    validates :first_name, presence: true, length: { minimum: 2 }
    validates :last_name, presence: true, length: { minimum: 1 }
    validates :image, allow_nil: true, :url => true
    validates :city, allow_nil: true, length: { minimum: 2 }
    validates :state, allow_nil: true, length: { is: 2 }
    
end
