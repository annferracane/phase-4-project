class User < ApplicationRecord
    has_one 
    has_secure_password
end
