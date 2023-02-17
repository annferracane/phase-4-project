class SchoolsController < ApplicationController

    def index
        render json: School.limit(10), status: :ok
    end

    def show
        school = School.find(params[:id])
        render json: school, status: :ok
    end

    def school_lookup
        school = School.find_by!(params[:school_name])

    end

    private

    def school_lookup_params
        permit.params(:school_name)

    end
end
