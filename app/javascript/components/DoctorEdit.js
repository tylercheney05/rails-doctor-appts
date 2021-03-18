import React from 'react';

const DoctorEdit = ({ doctor }) => {
  const {id, doctor_name, specialty} = doctor
  const defaultName = doctor_name ? doctor_name : ""
  const defaultSpecialty = specialty ? specialty : ""
  return (
    <>
      <a href="/doctors">Back to Doctors</a>
      <h1>Edit {doctor_name}</h1>
      <form action={`/doctors/${id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Doctor Name"
          required
          type="text"
          defaultValue={defaultName}
          name="doctor[doctor_name]"
        /><br/>
        <input 
          placeholder="Specialty"
          defaultValue={defaultSpecialty}
          type="text"
          name="doctor[specialty]"
        /><br/>
        <button type="submit">Update</button>
      </form>
    </>
  )
}
export default DoctorEdit;