import React from 'react';

const Patient = ({ patient, doctors }) => {
  const {id, patient_name, age, gender} = patient
  return (
    <>
      <a href="/patients">Back to Patients</a><br/>
      <a href={`/patients/${id}/edit`}>Edit Patient</a>
      <h1>{patient_name}</h1>
      <h3>Age: {age}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Doctors:</h3>
      <ul>
        {doctors.map( (d) => (
          <li>
            <a href={`/doctors/${d.id}`}>{d.doctor_name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Patient;