Rails.application.routes.draw do
  resources :tips, only: [:index, :show, :destroy]
  resources :users, only: [:show] do
    resources :profiles, only: [:create, :update]
    resources :tips, only: [:index, :show, :update, :destroy]
  end
  resources :schools, only: [:index, :show] do
    resources :tips, only: [:index, :show, :create, :update, :destroy]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
