import React from 'react';


const Appointments = ({ doctor, appointments, patients  }) => {
  const { date, notes, reason, } = appointments
  const { patient_name  } = patients 
  const { doctor_name} = doctor
  return(
    <>
      <h1> Appiontments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Appointments for Dr. {doctor_name}</h2>
      { appointments.map( (t) => (
        <div>

        Date of Appointment: <a href={`/doctors/${doctor.id}/appointments/${t.id}`}> {t.date}</a>
        </div>
      ))}
      
    </>
  )
}

export default Appointments;