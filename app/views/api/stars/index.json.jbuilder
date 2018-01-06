@stars.each do |star|
  json.set! star.id do
    json.extract! star, :id, :name, :image, :planets, :lat, :long, :users
  end
end
