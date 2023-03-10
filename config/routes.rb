Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :tips, only: [ :index, :show, :create, :update, :destroy ]
  resources :users, only: [ :show, :create ] do
    resources :tips, only: [ :index, :show ]
  end
  resources :schools, only: [ :index, :show ] do
    resources :tips, only: [ :index, :show ]
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
  get '/school-lookup/:school_name', to: 'schools#school_lookup'
  # Profile creation route
  post '/profile', to: 'profiles#create'
  patch '/profile', to: 'profiles#update'

  # Add auth routes here
  post '/login', to: 'sessions#create'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to:'sessions#destroy'
  
end
