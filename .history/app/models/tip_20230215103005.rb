class Tip < ApplicationRecord
    belongs_to :school
    belongs_to :user

    validates :title, presence: true


end
