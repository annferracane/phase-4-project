class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image, :city, :state, :gender, :hobby, :user_id
end
