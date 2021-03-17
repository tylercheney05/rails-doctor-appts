class Patient < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments 

  validates :age, numericality: { only_integer: true , greater_than_or_equal_to: 0, message: "Invalid entry for age"}
  validates :gender, inclusion: { in: ['male', 'female'],
  message: "Invalid entry for gender" }, allow_nil: true
end
