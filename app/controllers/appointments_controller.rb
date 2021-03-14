class AppointmentsController < ApplicationController
  def index
    @appointments = Appointments.all
    render component: "Appointments", props: {appointments: @appointments, user: current_user}
  end

  def show
  end

  def new
  end

  def edit
  end
end
