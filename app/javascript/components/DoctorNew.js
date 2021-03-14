import React from 'react';

const DoctorNew = ({ doctor }) => {
  const { doctor_name, errors } = doctor
  const defaultName = doctor_name ? doctor_name : ""
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
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default DoctorNew;