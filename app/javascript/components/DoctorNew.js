import React from 'react';

const DoctorNew = ({ doctor }) => {
  const { doctor_name, specialty, errors } = doctor
  const defaultName = doctor_name ? doctor_name : ""
  const defaultSpecialty = specialty ? specialty : ""
  return (
    <>
      <h1>Add Doctor</h1>
      { errors && errors }
      <form action="/doctors" method= "post">
        <input
        placeholder="Name"
        type="text"
        defaultValue={defaultName}
        name="doctor[doctor_name]"
        />
        <input
        placeholder="specialty"
        type="text"
        defaultValue={defaultSpecialty}
        name="doctor[Specialty]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default DoctorNew; 