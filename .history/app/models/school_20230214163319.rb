class School < ApplicationRecord

    validates :name, presence: true
    validates :domain, 
end
