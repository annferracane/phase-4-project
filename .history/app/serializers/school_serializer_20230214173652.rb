class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :domain

  def name_trimmed
    
  end
end
