class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :domain, :name_trimmed

  def name_trimmed
    if self.object.name.length >
    self.object.name.truncate(25) + "..."
  end
end
