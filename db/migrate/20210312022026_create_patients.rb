class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :patient_name
      t.integer :age
      t.string :gender

      t.timestamps
    end
  end
end
