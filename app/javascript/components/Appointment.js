import React from 'react';


const Appointment = ({ appointment }) => {
  const { reason, text, date } = appointment;
  return (
    <>
      <h1>Date: {date}</h1>
      <hr />
      <h1>Reason: {reason}</h1>
      <hr />
      <h1>Text: {text}</h1>
      <hr />
      <a href={`/doctors/${id}/appointments/`}>Appointments</a>
    </>
  )
}

export default AppointmentNew;