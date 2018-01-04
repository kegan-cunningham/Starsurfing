class CreateStars < ActiveRecord::Migration[5.1]
  def change
    create_table :stars do |t|
      t.string :name
      t.integer :planets

      t.timestamps
    end
    add_index :stars, :name
  end
end
