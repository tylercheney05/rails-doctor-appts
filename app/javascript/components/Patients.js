import React from 'react';

const Patients = ({ patients }) => {
  return(
    <>
      <a href="/">Back to home page</a><br/>
      <a href="/patients/new">Add New Patient</a>
      <h1>Patients</h1>
      <div class="box">
      { patients.map((patient) => 
        <div key={patient.id}>
          <h3>{patient.patient_name}</h3>
          <ul>
            <li><a class="ui pink basic button" href={`patients/${patient.id}`}>View</a></li>
            <li><a class="ui olive basic button" href={`patients/${patient.id}/edit`}>Edit</a></li>
            <li><a class="ui teal basic button" href={`patients/${patient.id}/appointments`}>View Appointments</a></li>
            <li><a class="ui violet basic button" href={`patients/${patient.id}/appointments/new`}>Create New Appointment</a></li>
            <li><a class="ui red basic button" href={`patients/${patient.id}`} data-method="delete">Delete</a></li>
          </ul>
        </div>
      )}
      </div>
    </>
  )
}
export default Patients;