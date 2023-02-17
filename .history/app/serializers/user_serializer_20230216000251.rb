class UserSerializer < ActiveModel::Serializer
  attributes :email, :user_type
  
  has_one :profile
  has_many :tips
end
