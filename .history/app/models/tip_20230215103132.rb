class Tip < ApplicationRecord
    belongs_to :school
    belongs_to :user

    validates :title, presence: true
    validates :on_or_off_campus, presence: true
    validates :category, presence: true
    validates :content, presence: true


end
