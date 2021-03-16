import React from 'react';

const Doctor = ({ doctor }) => {
<<<<<<< HEAD
  const { doctor_name, id } = doctor
=======
  const { doctor_name } = doctor;
>>>>>>> updated appointments controller
  return (
    <>
      <h1>Doctor: {doctor_name}</h1>
      <hr />
<<<<<<< HEAD
      <a href={`/doctors/${id}/appointments`}>Appointments</a>
      <br />
      <a href={`/doctors/${id}`} data-method="delete">Delete Doctor</a>
=======
      <a href={`/doctors/${id}/appointments/`}>Appointments</a>
>>>>>>> updated appointments controller
    </>
  )
}

export default Doctor;