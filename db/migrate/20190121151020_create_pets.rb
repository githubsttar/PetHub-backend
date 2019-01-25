class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :owner
      t.text :description
      t.string :tag, null: false
      t.string :image, null:true
      t.string :image_content_type, null:true
      t.timestamps
    end
  end
end
