Rails.application.routes.draw do
  root 'static_pages#home'
  devise_for :users

  resources :patients do
    resources :appointments
  end
  
  resources :doctors do 
    resources :appointments
  end
end
