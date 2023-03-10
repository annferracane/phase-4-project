class School < ApplicationRecord
    has_many :tips, dependent: :destroy
    has_many :users, through: :tips

    validates :name, presence: true
    validates :domain, presence: true
    validates_format_of :domain, with: /\A((?:[-a-z0-9]+\.)+(edu))\z/i, message: "School domain must be a .edu domain"
end
