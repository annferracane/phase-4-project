class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_type

  def 
  
  has_one :profile
  has_many :tips
end
