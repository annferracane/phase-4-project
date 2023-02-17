Rails.application.routes.draw do
  resources :tips, only: [:index, :show]
  resources :users, only: [:show] do
    resources :profiles, only: [:create, :update]
    resources :tips, only: [:index, :show, :update, :destroy]
  end
  resources :schools, only: [:index, :show] do
    resources :tips, only: [:index, :show, :create, :update, :destroy]
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  

  # Add auth routes here
  post '/login', to: 'sessions#create'

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  
end
