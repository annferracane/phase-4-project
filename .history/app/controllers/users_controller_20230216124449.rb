class UsersController < ApplicationController
    def show
        user = current_user
        render json: user, status: :ok
    end
end
