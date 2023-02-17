class ProfilesController < ApplicationController

    def create

    end

    def update

    end

    private

    def profile_params
        params.permit(:user_id)

    end
end
