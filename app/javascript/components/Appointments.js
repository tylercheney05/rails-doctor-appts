import React from 'react';


const Appointments = ({ doctor, appointments, patients  }) => {
  const { date, notes, reason } = appointments
  const { patient_name  } = patients 
  const { doctor_name} = doctor
  return(
    <>
      <h1> Appiontments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Appointments</h2>
      { appointments.map( (t) => (
        <div>
          <h5>{t.reason}, {t.date} {t.notes} {doctor_name}</h5>
        </div>
      ))}
      
    </>
  )
}

export default Appointments;