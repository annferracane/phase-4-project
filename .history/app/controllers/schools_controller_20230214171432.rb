class SchoolsController < ApplicationController

    def index
        render json: School.all, status: :ok
    end

    def show
        
    end
end
