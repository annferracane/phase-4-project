class UsersController < ApplicationController
    def show
        user = current_user
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 
    
    private 

    def user_params
        params.permit(:email, :password)
    end 
end
