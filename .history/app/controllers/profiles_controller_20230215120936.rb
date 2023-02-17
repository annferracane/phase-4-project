class ProfilesController < ApplicationController

    def create
        Profile.create!(profile_params)
        user = User.find()
    end

    def update

    end

    private

    def profile_params
        params.permit(:first_name, :last_name, :image, :city, :state, :gender, :hobby, :user_id)

    end
end
