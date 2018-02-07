json.extract! request, :id, :end_date, :start_date, :status, :host_id, :updated_at
surfer = request.surfer
host = request.host
json.surfer_id surfer.id
json.surfer_name surfer.firstname.concat(' ').concat(surfer.lastname)
json.surfer_image_url asset_path(surfer.image.url)
json.surfer_location surfer.star.name
json.surfer_location_id surfer.star.id

json.host_name host.firstname.concat(' ').concat(host.lastname)
json.host_image_url asset_path(host.image.url)
json.host_location host.star.name
json.host_location_id host.star.id
