json.partial! 'api/users/user', user: @user
json.user do
  json.extract! @user, :hosting, :firstname, :lastname, :image
end
