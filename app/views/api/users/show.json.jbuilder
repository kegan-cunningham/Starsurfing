json.partial! 'api/users/user', user: @user
json.extract! @user, :about, :host_requests
json.star @user.star.name
json.star_id @user.star.id
json.reviewIds @user.reviews.pluck(:id)
