class ProfilesController < ApplicationController
    def show
        profile = User.find(params[:user_id])
    end

    def create

    end

    def update

    end

    private

    def profile_params

    end
end
