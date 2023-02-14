class School < ApplicationRecord
    validates :name, presence: true
    validates_format_of :domain, with: /\A((?:[-a-z0-9]+\.)+(edu))\z/i, message: "School domain must be a .edu address"
end
