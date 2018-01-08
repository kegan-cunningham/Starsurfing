class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id
      t.integer :user_id
      t.string :title
      t.text :body

      t.timestamps
    end
    add_index :reviews, :user_id
  end
end
