class StaticPagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def home
  end
end
