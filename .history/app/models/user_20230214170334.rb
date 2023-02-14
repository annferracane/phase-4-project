class User < ApplicationRecord
    has_one :profile

    has_secure_password

    validates :email, presence: true
    validates_format_of :email, with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|biz|info))\z/i
    validates :password, presence: true, , length: { minimum: 2 }

end
