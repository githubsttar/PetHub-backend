class CreatePetTags < ActiveRecord::Migration[5.2]
  def change
    create_table :pet_tags do |t|
      t.integer :tag_id
      t.integer :pet_id

      t.timestamps
    end
  end
end
