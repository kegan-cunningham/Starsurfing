json.extract! user, :id, :username, :hosting, :firstname, :lastname
json.imageUrl asset_path(user.image.url)
