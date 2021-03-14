import React from 'react';

const PatientNew = ({ patient }) => {
  const {patient_name} = patient
  const defaultName = patient_name ? patient_name : ""
  return(
    <>
      <h1>New Patient</h1>
      <form action="/patients" method="post">
        <input 
          placeholder="Name"
          defaultValue={defaultName}
          type="text"
          name="patient[patient_name]"
        />
        <button type="submit">Add Patient</button>
      </form>
    </>
  )
}
export default PatientNew;