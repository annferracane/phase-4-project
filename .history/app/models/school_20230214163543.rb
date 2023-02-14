class School < ApplicationRecord

    validates :name, presence: true
    validates_format_of :domain, with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|biz|info))\z/i
end
agasd@gmail.com