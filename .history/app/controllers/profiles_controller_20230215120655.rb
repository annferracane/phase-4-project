class ProfilesController < ApplicationController
    def show
        profile = User.find(params)
    end

    def create

    end

    def update

    end

    private

    def profile_params

    end
end
