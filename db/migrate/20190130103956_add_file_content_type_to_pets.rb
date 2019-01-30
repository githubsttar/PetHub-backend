class AddFileContentTypeToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :fileContentType, :string
  end
end
