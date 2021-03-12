# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ages = (10..90).to_a
5.times do
  doctor = Doctor.create(
      doctor_name: Faker::GreekPhilosophers.name,
      specialty: Faker::Games::Minecraft.enchantment 
  )
  3.times do
    patient = Patient.create(
    patient_name: Faker::FunnyName.name,
    age: ages.sample,
    gender: Faker::Gender.binary_type 
  )
    2.times do
      Appointment.create(
        date: Faker::Date.between(from: '1523-09-23', to: '1876-09-25'),
        reason: Faker::Games::Pokemon.move,
        notes: Faker::ChuckNorris.fact,
        patient_id: patient.id,
        doctor_id: doctor.id
      )
    end
  end
end
puts "Data Seeded"