class School < ApplicationRecord

    validates :name, presence: true
    validates :domain, url: true
    validates_inclusion_of :domain, in: %w( .edu ), message: "School domain must be a .edu address"
end
