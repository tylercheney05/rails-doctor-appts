class AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token 
  before_action :authenticate_user!
  def index
  end

  def show
    @appointment= current_user.appointments.find(params[:id])
    render component: "Appointment", props: { user: current_user, appointments: @appointments }
  end

  def new
    @appointment = current_user.appointment.new
    render component: "AppointmentsNew", props: { user: current_user, appointment: @appointment }
  end

def create
  @appointment = current_user.appointment.new(appointment_params)
  if @appointment.save
    redirect_to root_path
  else
    render component: "AppointmentsNew", props: { user: current_user, appointment: @appointment}
  end
end

def edit
  @appointment = current_user.departments.find(params[:id])
  render component: 'AppointmentsEdit', props: { user: current_user, appointment: @appointment }
end

def update
  @appointment = current_user.departments.new(department_params)
  if @appointment.update(department_params)
    redirect_to root_path
  else
    render component: "AppointmentsNew", props: { user: current_user, appointment: @appointment }
  end
end

def destroy
  @appointment = current_user.appointments.find(params[:id])
  @appointment.destroy 
  redirect_to root_path
end

private 
  def appointment_params
    params.require(:department).permit(:name)
  end
end

