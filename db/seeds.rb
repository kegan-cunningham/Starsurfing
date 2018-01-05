# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
u1 = User.new(
  username: "guest",
  firstname: "guesticle",
  lastname: "mclovin",
  password: "password",
  hosting: true,
  star_id: 1
)
file = File.open('app/assets/images/default-user-image.jpg')
u1.image = file
u1.save!

Star.destroy_all

15.times do
  star = Star.new(
  name: Faker::Space.unique.star,
  planets: rand(10)
  )
  file = File.open('app/assets/images/exoplanets.png')
  star.image = file
  star.save!
end
