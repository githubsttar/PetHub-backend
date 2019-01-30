class AddFileBase64ToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :fileBase64, :string
  end
end
