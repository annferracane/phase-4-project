class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :domain, :name_trimmed

  def name_trimmed
    if self.object.name.length > 28
      self.object.name.truncate(28)
    else
      self.object.name
    end
  end
end
