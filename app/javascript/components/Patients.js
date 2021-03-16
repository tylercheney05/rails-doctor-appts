import React from 'react';

const Patients = ({ patients }) => {
  return(
    <>
      <a href="/patients/new">Add New Patient</a>
      <h1>Patients</h1>
      { patients.map((patient) => 
        <div key={patient.id}>
          <a>{patient.patient_name}</a>
          <ul>
            <li><a href={`patients/${patient.id}`}>View</a></li>
            <li><a href={`patients/${patient.id}/edit`}>Edit</a></li>
            <li><a href={`patients/${patient.id}/appointments`}>View Appointments</a></li>
            <li><a href={`patients/${patient.id}/appointments/new`}>Create New Appointment</a></li>
            <li><a href={`patients/${patient.id}`} data-method="delete">Delete</a></li>
          </ul>
        </div>
      )}
    </>
  )
}
export default Patients;