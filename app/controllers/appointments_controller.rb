class AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_doctor

  def index
    @appointments = @doctor.appointments.all
    @patients = Patient.all
    render component: "Appointments", props: { doctor: @doctor, appointments: @appointments, patients: @patients }
  end
  def show
    @appointment = @doctor.appointments.find(params[:id])
    render component: "Appointment", props: {  doctor: @doctor, appointment: @appointment, patients: @patients }
  end


  def new
    @appointment = @doctor.appointments.new
    @patients = Patient.all
    render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment, patients: @patients }
  
end

def create

  @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appointments_path(@doctor)

  else
    @patients = Patient.all
    render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment, patients: @patients  }
  end
end

# def edit
#   @appointment = @doctors.appointment.find(params[:id])
#   render component: 'AppointmentsEdit', props: { doctor: @doctor, appointment: @appointment }
# end

# def update
#   @appointment = Doctor.appointments.new(appointment_params)
#   if @appointment.update(department_params)
#     redirect_to root_path
#   else
#     render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment }
#   end
# end

def destroy
  @appointment = @doctor.appointments.find(params[:id])
  @appointment.destroy
  redirect_to root_path
end


private

def set_doctor
  @doctor = Doctor.find(params[:doctor_id])
end

def appointment_params
    params.require(:appointment).permit(:reason, :notes, :date, :patient_id )
  end
end
