import React from 'react';

const AppointmentNew = ({ doctor, appointment, patients }) => {
  const { doctor_id } = doctor
  const { patient_name, patient_id } = patients
  const { reason, date, notes, errors } = appointment
  const defaultReason = reason ? reason : ""
  const defaultNotes = notes ? notes : ""
  const defaultDate = date ? date : ""
  const defaultPatient = patient_id ? patient_id : ""

  return(
    <>
      <h1>Add Appointment</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments/`} method= "post">
        <input
          placeholder="Reason"
          defaultValue={defaultReason}
          type="text"
          name="appointment[reason]"
        /><br/>
        <textarea
          placeholder="Date"
          defaultValue={defaultDate}
          name="appointment[date]"
        /><br/>
        <input
          placeholder="Notes"
          defaultValue={defaultNotes}
          type="text"
          name="appointment[notes]"
        /><br/>
        <select
          name="appointment[patient_id]"
          id="patient_id"
          defaultValue={defaultPatient}
        >
          { patients.map((u) => (
            <option value={u.id}>
              {`${u.patient_name}`}
            </option>
          ))}
        </select>

        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AppointmentNew;