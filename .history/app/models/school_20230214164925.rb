class School < ApplicationRecord

    validates :name, presence: true
    validates :domain, url: true
    validates_inclusion_of :domain, in: %w( jpg gif png ), message: "extension %{value} is not included in the list"
end
