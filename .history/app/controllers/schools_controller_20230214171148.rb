class SchoolsController < ApplicationController

    def index
        render json: School.all, status: :ok
    end
end
