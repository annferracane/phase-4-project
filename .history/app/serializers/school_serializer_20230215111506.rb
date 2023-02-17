class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :domain, :name_trimmed

  has_many :tips

  def name_trimmed
    if self.object.name.length > 28
      self.object.name.truncate(28)
    else
      self.object.name
    end
  end
end
