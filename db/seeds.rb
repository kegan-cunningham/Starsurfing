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
  file = File.open("app/assets/images/Star#{i+1}.jpg")
  star.image = file
  star.save!
end

User.destroy_all
100.times do |i|
  u1 = User.new(
    username: Faker::Internet.unique.user_name,
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    password: "password",
    hosting: Faker::Boolean.boolean,
    star_id: Star.all.sample.id,
    about: Faker::Lorem.paragraphs(2).join(' ')
  )
  file = File.open("app/assets/images/users/UserPhoto#{i % 56}.jpg")
  u1.image = file
  u1.save!
end

u1 = User.new(
  username: "DemoUser",
  firstname: "Demo",
  lastname: "User",
  password: "password",
  hosting: true,
  star_id: Star.all.sample.id,
  about: Faker::Lorem.paragraphs(2).join(' ')
)
file = File.open("app/assets/images/users/UserPhoto#{42}.jpg")
u1.image = file
u1.save!

Review.destroy_all
150.times do
  Review.create!(
    author_id: User.all.sample.id,
    user_id: User.all.sample.id,
    body: Faker::HitchhikersGuideToTheGalaxy.quote,
    title: Faker::HitchhikersGuideToTheGalaxy.marvin_quote
  )

end
