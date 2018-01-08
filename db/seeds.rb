# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


Star.destroy_all

15.times do |i|
  star = Star.new(
  name: Faker::Space.unique.star,
  planets: (rand(10) + 1),
  lat: Faker::Address.latitude,
  long: Faker::Address.longitude,
  )
  file = File.open('app/assets/images/space01.jpg')
  star.image = file
  star.save!
end

User.destroy_all
100.times do
  u1 = User.new(
    username: Faker::Internet.user_name,
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    password: "password",
    hosting: Faker::Boolean.boolean,
    star_id: Star.all.sample.id,
    about: Faker::Lorem.paragraphs(1)
  )
  file = File.open('app/assets/images/default-user-image.jpg')
  u1.image = file
  u1.save!
end

u1 = User.new(
  username: "DemoUser",
  firstname: "Demo",
  lastname: "User",
  password: "password",
  hosting: false,
  star_id: Star.all.sample.id,
  about: Faker::Lorem.paragraphs(1)
)
file = File.open('app/assets/images/default-user-image.jpg')
u1.image = file
u1.save!
