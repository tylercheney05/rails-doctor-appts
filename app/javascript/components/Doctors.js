<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> updated appointments controller

const Doctors = ({ doctors }) => {
  return (
    <>
      <h1>Doctors</h1>
      <a href="/doctors/new">Add Doctor</a>
      <br />
      <h2>{ doctors.length <= 0 ? "No Doctors" : "" }</h2>
      { doctors.map((doctor) => (
        <div>
          <a href={`/doctors/${doctor.id}`}>{doctor.doctor_name}</a>
<<<<<<< HEAD
          <hr />
=======
>>>>>>> updated appointments controller
        </div>
      ))}
    </>
  )
}

<<<<<<< HEAD
export default Doctors;
=======
export default Doctors;
>>>>>>> updated appointments controller
