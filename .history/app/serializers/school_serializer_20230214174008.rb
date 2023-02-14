class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :domain, :name_trimmed

  def name_trimmed
    if self.object.name.length > 25
      self.object.name.truncate(25) + "..."
    if test
      
    else
      
    end
    
  end
end
