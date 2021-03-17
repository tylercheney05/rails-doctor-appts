class DoctorsController < ApplicationController
  skip_before_action :verify_authenticity_token #this wasnt in henrys lms project
  before_action :set_doctor, except: [ :index, :new, :create ]

  def index
    @doctors = Doctor.all
    #this render component was commented out in henrys lms project
    #render component: "Doctors", props: { doctors: @doctors, authenticity_token: session[:_csrf_token] }
    #this render component was used
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
    #create vs new discrepancy in walkthrough vs henry project
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to @doctor
    else
      render component: "DoctorNew", props: { doctor: @doctor }
      #render :new
    end
  end

  #edit and delete didnt exist in lms walkthrough, but project shows them
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
      params.require(:doctor).permit(:doctor_name)
    end

end
