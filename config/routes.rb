Rails.application.routes.draw do
  namespace :api, defaults: {fotmat: :json} do
    resources :tasks
  end
end
