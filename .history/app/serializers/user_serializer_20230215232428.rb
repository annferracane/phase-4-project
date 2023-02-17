class UserSerializer < ActiveModel::Serializer
  attributes :email, :type
  
  has_one :profile
  has_many :tips
end
