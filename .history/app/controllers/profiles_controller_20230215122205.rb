class ProfilesController < ApplicationController

    def create
        Profile.create!(profile_params)
        user = User.find(params[:user_id])
        render json: user, status: :created
    end

    def update
        profile = User.find(params)
        spice.update(spice_params)
        render json: spice, status: :accepted

    end

    private

    def profile_params
        params.permit(:first_name, :last_name, :image, :city, :state, :gender, :hobby, :user_id)

    end
end
