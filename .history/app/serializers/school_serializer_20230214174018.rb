class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :domain, :name_trimmed

  def name_trimmed
    if self.object.name.length > 25
      self.object.name.truncate(25) + "..."
    else
      self.object.name
    end
  end
end
