class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :domain, :name_trimmed

  def name_trimmed
    self.object.name.truncate(25)
  end
end
