class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.integer :host_id
      t.integer :surfer_id
      t.date :start_date, :null => false
      t.date :end_date, :null => false
      t.string :status, default: 'PENDING'

      t.timestamps
    end
    add_index :requests, :host_id
  end
end
