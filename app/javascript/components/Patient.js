import React from 'react';

const Patient = ({ patient }) => {
  const {id, patient_name, age, gender} = patient
  return (
    <>
      <a href={`/patients/${id}/edit`}>Edit Patient</a>
      <h1>{patient_name}</h1>
      <h3>Age: {age}</h3>
      <h3>Gender: {gender}</h3>
      <a href={`/patients/${id}/appointments/new`}>Schedule an appointment</a><br/>
      <a href={`/patients/${id}/appointments/`}>View appointments</a>
    </>
  )
}
export default Patient;