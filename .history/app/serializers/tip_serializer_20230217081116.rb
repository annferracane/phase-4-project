class TipSerializer < ActiveModel::Serializer
  attributes :id, :title, :on_or_off_campus, :category, :content, :user_Id

  belongs_to :school
  belongs_to :user
end
