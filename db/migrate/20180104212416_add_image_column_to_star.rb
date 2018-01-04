class AddImageColumnToStar < ActiveRecord::Migration[5.1]
  def change
    add_attachment :stars, :image
  end
end
