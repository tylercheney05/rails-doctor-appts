import React from 'react';

const AppointmentNew = ({ doctor, appointment }) => {
  const { id  } = doctor
  const { reason, date, text, errors } = appointment
  const defaultReason = reason ? reason : ""
  const defaultText = text ? text : ""
  const defaultDate = date ? date : ""
  

  
  return (
    <>
      <h1>Add Appointment</h1>
      { errors && errors }
      <form action={`/doctors/`} method= "post">
      <input type="hidden" name="doctor[user_id]" value={id} />
      <input
          placeholder="Reason"
          defaultValue={defaultReason}
          type="text"
          name="appointmentreason]"
        /><br/>
        <textarea
          placeholder="Date"
          defaultValue={defaultDate}
          name="appointment[date]"
        /><br/>
        <input
          placeholder="Notes"
          defaultValue={defaultText}
          type="text"
          name="appointment[text]"
        /><br/>
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AppointmentNew; 