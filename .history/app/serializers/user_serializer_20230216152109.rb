class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_type

  
  
  has_one :profile
  has_many :tips
end
