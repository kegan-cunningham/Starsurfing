json.extract! review, :id, :title, :body, :user_id, :author_id, :updated_at
reviewer = review.reviewer
json.author_name reviewer.firstname.concat(' ').concat(reviewer.lastname)
json.author_image_url asset_path(reviewer.image.url)
json.author_location reviewer.star.name
json.author_id reviewer.id
