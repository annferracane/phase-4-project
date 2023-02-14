class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :domain

  def name_trimmed
    self.object.name[1..28]
  end
end
