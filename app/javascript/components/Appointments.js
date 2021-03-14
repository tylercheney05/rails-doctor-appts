import React from 'react';
import Navbar from './Navbar';

const Departments = ({ user, appointments  }) => {
  const { date, notes, reason } = appointments
  const { first_name, last_name } = user 
  return (
    <>
      <Navbar />
      <h1>Appointments</h1>
      <h2>Welcome {`${first_name}  ${last_name}`}</h2>
      <hr />
      <a href="/appointments/">Add New Department</a>
      <br />
      <h3>Apointments</h3>
      <ul>
        { departments.map((a) => (
          <li key={a.date}>
            {a.reason} 
            {a.notes}
          </li>
          
        ))}
      </ul>
    </>
  )
}

export default Departments;