class AddLatLongToStars < ActiveRecord::Migration[5.1]
  def change
    add_column :stars, :lat, :decimal, {:precision=>10, :scale=>6}
    add_column :stars, :long, :decimal, {:precision=>10, :scale=>6}
  end
end
