import React from 'react';

const PatientEdit = ({ patient }) => {
  const {id, patient_name, age, gender} = patient
  const defaultName = patient_name ? patient_name : ""
  const defaultAge = age ? age : ""
  const defaultGender = gender ? gender : ""
  return (
    <>
      <h1>Edit {patient_name}</h1>
      <form action={`/patients/${id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Patient Name"
          required
          type="text"
          defaultValue={defaultName}
          name="patient[patient_name]"
        /><br/>
        <input 
          placeholder="Age"
          defaultValue={defaultAge}
          type="number"
          name="patient[age]"
        /><br/>
        <select name="patient[gender]" id="gender" defaultValue={defaultGender} required>
          <option value="" disabled selected>Choose Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select><br/>
        <button type="submit">Update</button>
      </form>
    </>
  )
}
export default PatientEdit