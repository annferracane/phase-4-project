class CreateTips < ActiveRecord::Migration[7.0]
  def change
    create_table :tips do |t|
      t.string :title
      t.boolean :on_or_off_campus
      t.string :category
      t.text :content
      t.integer :school_id
      t.integer :user_id

      t.timestamps
    end
  end
end
