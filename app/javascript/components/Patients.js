import React from 'react';

const Patients = ({ patients }) => {
  return(
    <>
      <h1>Patients</h1>
      <a href="/patients/new">Add New Patient</a>
      { patients.map((patient) => 
        <div key={patient.id}>
          <h3>patient.patient_name</h3>
        </div>
      )}
    </>
  )
}
export default Patients;