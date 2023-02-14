class School < ApplicationRecord

    validates :name, presence: true
    validates :domain, url: true
    :format, in: %w( jpg gif png )
    #validates_format_of :domain, with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(edu))\z/i
end
