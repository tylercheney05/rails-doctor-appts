class PatientsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @patients = Patient.all
    render component: 'Patients', props: { patients: @patients }
  end

  def show
    @patient = Patient.find(params[:id])
    render component: 'Patient', props: { patient: @patient }
  end

  def new
    @patient = Patient.new
    render component: 'PatientNew', props: { patient: @patient }
  end

  def create
    @patient = Patient.new(patient_params)
    if @patient.save
      flash[:success] = "Patient Created"
      redirect_to patient_path(@patient)
    else
      flash[:error] = "Error #{@patient.errors.full_messages.join("\n")}"
      render component: 'PatientNew', props: { patient: @patient }
    end
  end

  def edit
    @patient = Patient.find(params[:id])
    render component: 'PatientEdit', props: { patient: @patient}
  end

  def update
    @patient = Patient.find(params[:id])
    if @patient.update(patient_params)
      flash[:success] = "Patient Updated"
      redirect_to patient_path(@patient)
    else
      flash[:error] = "Error #{@patient.errors.full_messages.join("\n")}"
      render component: 'PatientEdit', props: { patient: @patient }
    end
  end

  def destroy
    @patient = Patient.find(params[:id])
    @patient.destroy
    redirect_to patients_path
  end

  private
    def patient_params
      params.require(:patient).permit(:patient_name, :age, :gender)
    end
end
