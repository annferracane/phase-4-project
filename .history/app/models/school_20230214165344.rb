class School < ApplicationRecord

    validates :name, presence: true
    validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    validates_inclusion_of :domain, in: %w( edu ), message: "School domain must be a .edu address"
end