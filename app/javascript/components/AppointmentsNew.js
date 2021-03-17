import React from 'react';

const AppointmentNew = ({ doctor, appointment, patients }) => {
  const { doctor_id  } = doctor
  const defaultReason = reason ? reason : ""
  const defaultNote = note ? note : ""
  const defaultDate = date ? date : ""
  
z
  
  return (
    <>
      <h1>Add Appointment</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments`} method= "post">
      <input type="hidden" name="appointment[appointment_id]" value={id} />
      <input
          placeholder="Reason"
          defaultValue={defaultReason}
          type="text"
          name="appointment[reason]"
        /><br/>
        <input
          placeholder="Date"
          defaultValue={defaultDate}
          name="appointment[date]"
        /><br/>
        <input
          placeholder="Notes"
          defaultValue={defaultNote}
          type="text"
          name="appointment[notes]"
        /><br/>
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AppointmentNew; 