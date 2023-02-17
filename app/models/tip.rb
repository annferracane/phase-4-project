class Tip < ApplicationRecord
    belongs_to :school
    belongs_to :user

    validates :title, presence: true
    validates :on_or_off_campus, inclusion: [true, false]
    validates :category, presence: true, inclusion: ['Educational', 'Social/Fun', 'Other']
    validates :content, presence: true, length: { in: 10..500 }

end
