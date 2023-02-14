class School < ApplicationRecord

    validates :name, presence: true
    validates :domain, url: true
    #validates_format_of :domain, with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(edu))\z/i
end
