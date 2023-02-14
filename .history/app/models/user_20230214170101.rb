class User < ApplicationRecord
    has_one :profile

    has_secure_password

    validates :name, presence: true 

end
