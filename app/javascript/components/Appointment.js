import React from 'react';

const Appointment = ({ doctor, appointment, patients }) => {
  const { reason, notes, date } = appointment;
  return (
    <>
      <h3>Date: {date}</h3>
      <hr />
      <h3>Reason: {reason}</h3>
      <hr />
      <h3>Text: {notes}</h3>
      <hr />
      <a href={`/doctors/${doctor.id}/appointments/`}>Appointments</a>
      <br/>
      <a href={`/doctors/${doctor.id}/appointments/${appointment.id}`} data-method="delete">Delete Appointment</a>
    </>
  )
}

export default Appointment;