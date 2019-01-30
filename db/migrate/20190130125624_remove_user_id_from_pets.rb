class RemoveUserIdFromPets < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :user_id, :string
  end
end
