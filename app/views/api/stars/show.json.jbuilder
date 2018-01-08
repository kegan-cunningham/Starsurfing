json.extract! @star, :id, :name, :planets, :lat, :long
json.userIds @star.users.pluck(:id)
json.imageUrl asset_path(@star.image.url)
