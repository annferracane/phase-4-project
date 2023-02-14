class School < ApplicationRecord

    validates :name, presence: true
    validates :domain, url: true
    validates_inclusion_of :format, in: %w( jpg gif png ), message: "extension %{value} is not included in the list"
    #validates_format_of :domain, with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(edu))\z/i
end
