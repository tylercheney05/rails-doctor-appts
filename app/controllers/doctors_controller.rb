class DoctorsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_doctor, except: [ :index, :new, :create ]
  def index
    @doctors = Doctor.all
    render component: "Doctors", props: { doctors: @doctors }
  end
  def show
    render component: "Doctor", props: { doctor: @doctor }
  end
  def new
    @doctor = Doctor.new
    render component: "DoctorNew", props: { doctor: @doctor }
  end
  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to @doctor
    else
      render component: "DoctorNew", props: { doctor: @doctor }
    end
  end

  def edit
    render component: "DoctorEdit", props: { doctor: @doctor }
  end
  def update
    if @doctor.update(doctor_params)
      redirect_to @doctor
    else
      render component: "DoctorEdit", props: { doctor: @doctor }
    end
  end
  def destroy
    @doctor.destroy
    redirect_to doctors_path
  end
  private
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end
    def doctor_params
      params.require(:doctor).permit(:doctor_name, :specialty)
    end
end