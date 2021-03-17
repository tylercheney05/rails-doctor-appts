import React from 'react';

const PatientNew = ({ patient }) => {
  const {patient_name, age, gender} = patient
  const defaultName = patient_name ? patient_name : ""
  const defaultAge = age ? age : ""
  const defaultGender = gender ? gender : ""
  return(
    <>
      <a href="/patients">Back to Patients</a>
      <h1>New Patient</h1>
      <form action="/patients" method="post">
        <input 
          placeholder="Name"
          defaultValue={defaultName}
          type="text"
          name="patient[patient_name]"
        /><br/>
        <input 
          placeholder="Age"
          defaultValue={defaultAge}
          type="number"
          name="patient[age]"
        /><br/>
        <select name="patient[gender]" id="gender" required>
          <option value="" disabled selected>Choose Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <br/>
        <button type="submit">Add Patient</button>
      </form>
    </>
  )
}
export default PatientNew;