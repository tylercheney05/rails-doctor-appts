import React from 'react';


const Appointments = ({ user, appointments  }) => {
  const { date, notes, reason } = appointments
  // const { first_name, last_name } = user 
  return (
    <>
    
      <h1>Appointments</h1>
      {/* <h2>Welcome {`${first_name}  ${last_name}`}</h2> */}
      <hr />
      <a href="/doctors/${id}/appointments/new">Add New Appointment</a>
      <br />
      <h3>Apointments</h3>
      <ul>
        { appointments.map((a) => (
          <li key={a.date}>
            {a.reason} 
            {a.notes}
          </li>
          
        ))}
      </ul>
    </>
  )
}

export default Appointments;