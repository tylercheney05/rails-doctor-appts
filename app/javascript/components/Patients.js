import React from 'react';

const Patients = ({ patients }) => {
  return(
    <>
      <a class="ui teal button" href="/">Back to home page</a>
      <a class="ui olive button" href="/patients/new">Add New Patient</a>
      <h1>Patients</h1>
      <div class="box">
      { patients.map((patient) => 
        <div key={patient.id} class="info-box">
          <h3>{patient.patient_name}</h3>
            <div class="buttons">
              <a class="ui pink basic button" href={`patients/${patient.id}`}>View</a>
              <a class="ui teal basic button" href={`patients/${patient.id}/edit`}>Edit</a>
              <a class="ui red basic button" href={`patients/${patient.id}`} data-method="delete">Delete</a>
            </div>
        </div>
      )}
      </div>
    </>
  )
}
export default Patients;