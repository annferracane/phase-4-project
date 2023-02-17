class AddTypeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :user, :part_number, :string
    add_column :table_name, :column_name, :column_type, :column_options
  end
end
