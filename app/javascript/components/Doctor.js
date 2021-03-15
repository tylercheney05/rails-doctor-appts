import React from 'react';

const Doctor = ({ doctor }) => {
  const { doctor_name, id } = doctor
  return (
    <>
      <h1>Doctor: {doctor_name}</h1>
      <hr />
      <a href={`/doctors/${id}/appointments`}>Appointments</a>
    </>
  )
}

export default Doctor;