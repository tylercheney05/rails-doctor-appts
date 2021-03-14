class PatientsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @patients = Patient.all
    render component: 'Patients', props: { patients: @patients }
  end

  def show
  end

  def new
    @patient = Patient.new
    render component: 'PatientNew', props: { patient: @patient }
  end

  def create
    @patient = Patient.new(patient_params)
    if @patient.save
      redirect_to patients_path
    else
      render component: 'PatientNew', props: { patient: @patient }
    end
  end

  def edit
  end

  private
    def patient_params
      params.require(:patient).permit(:patient_name, :age, :gender)
    end
end
