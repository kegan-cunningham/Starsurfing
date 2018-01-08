json.partial! 'api/users/user', user: @user
json.extract! @user, :hosting, :firstname, :lastname, :about
