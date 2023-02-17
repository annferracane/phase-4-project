class TipSerializer < ActiveModel::Serializer
  attributes :id, :title, :on_or_off_campus, :category, :content, :school_id, :user_id

  belongs_to :school
end
