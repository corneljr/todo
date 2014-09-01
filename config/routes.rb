Rails.application.routes.draw do
  root 'application#index'
  
  namespace :api, defaults: {fotmat: :json} do
    resources :tasks
  end
end
