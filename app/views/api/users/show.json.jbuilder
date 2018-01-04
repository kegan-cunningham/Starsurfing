json.partial! 'api/users/user', user: @user
json.user do
  json.extract! :hosting, :star_id, :firstname, :lastname
end
