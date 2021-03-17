import React from 'react';


const Appointments = ({ doctor, appointments, patients  }) => {
  const { date, notes, reason } = appointments
  const { patient_name  } = patients 
  return(
    <>
      <h1> Appiontments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Appointments</h2>
      { appointments.map( (t) => (
        <div>
          
        </div>
      ))}
      
    </>
  )
}

export default Appointments;