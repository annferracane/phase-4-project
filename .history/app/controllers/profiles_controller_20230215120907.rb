class ProfilesController < ApplicationController

    def create
        profile 
    end

    def update

    end

    private

    def profile_params
        params.permit(:first_name, :last_name, :image, :city, :state, :gender, :hobby, :user_id)

    end
end
