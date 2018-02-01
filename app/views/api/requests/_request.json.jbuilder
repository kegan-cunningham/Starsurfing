json.extract! request, :id, :end_date, :start_date, :status, :host_id, :updated_at
surfer = request.surfer
json.surfer_id surfer.id
json.surfer_name surfer.firstname.concat(' ').concat(surfer.lastname)
json.surfer_image_url asset_path(surfer.image.url)
json.surfer_location surfer.star.name
json.surfer_location_id surfer.star.id
