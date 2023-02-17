class ProfileSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :image, :city, :state, :gender, :hobby, :full_name

  def full_name
    self.object.first_name + " " + #{self.object.last_name}
  end
end
