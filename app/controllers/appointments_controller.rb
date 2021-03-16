class AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token 
  before_action :authenticate_user!
  before_action :set_doctor
  def index
    @appointments = @doctor.appointments
    render component: "Appointments", props: { doctor: @doctor, appointments: @appointments  }
  end  
  def show
    @appointment = @doctor.appointments.find(params[:id])
    render component: "Appointment", props: {  doctor: @doctor, appointments: @appointments }
  end

  def new
    @appointment = @doctor.appointments.new
    render component: "AppointmentsNew", props: { doctor: @doctor, appointment: @appointment }
  end

def create
  @appointment = @doctor.appointments.new(appointment_params)
  if @appointment.save
    redirect_to root_path
  else
    render component: "AppointmentsNew", props: { doctor: @doctors, appointment: @appointment}
  end
end

def edit
  @appointment = @doctors.appointment.find(params[:id])
  render component: 'AppointmentsEdit', props: { doctor: @doctors, appointment: @appointment }
end

def update
  @appointment = @doctors.appointment.new(appointment_params)
  if @appointment.update(department_params)
    redirect_to root_path
  else
    render component: "AppointmentsNew", props: { doctor: @doctors, appointment: @appointment }
  end
end

def destroy
  @appointment = @doctors.appointments.find(params[:id])
  @appointment.destroy 
  redirect_to root_path
end


private 
def set_doctor
  @doctor = Doctor.find(params[:doctor_id])
end

def set_appointment 
  @appointment = Doctor.appointments.find(params[:id])
end
def appointment_params
    params.require(:appointment).permit(:reason, :text, :date)
  end
end

