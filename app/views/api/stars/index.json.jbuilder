@stars.each do |star|
  json.set! star.id do
    # debugger
    json.extract! star, :id, :name, :planets, :lat, :long
    json.imageUrl asset_path(star.image.url)
  end
end
