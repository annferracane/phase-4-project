class ProfileSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :image, :city, :state, :gender, :hobby, :user_id
end
