class User < ApplicationRecord
    has_one :profile
    has_secure_password
    
end
