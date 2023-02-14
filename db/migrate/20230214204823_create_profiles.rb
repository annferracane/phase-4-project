class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :image
      t.string :city
      t.string :state
      t.string :gender
      t.string :hobby
      t.integer :user_id

      t.timestamps
    end
  end
end
