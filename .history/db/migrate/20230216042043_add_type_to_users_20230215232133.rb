class AddTypeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :user, :part_number, :string
  end
end
