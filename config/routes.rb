Rails.application.routes.draw do
  root 'static_pages#home'
  devise_for :users
  
  resources :patients
  resources :doctors do 
    resources :appointments
  end
end
