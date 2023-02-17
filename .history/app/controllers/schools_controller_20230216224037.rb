class SchoolsController < ApplicationController

    skip_before_action :authorized_user, only: [:school_lookup]
    
    def index
        render json: School.limit(100).order("RAND()").limit(1), status: :ok
    end

    def show
        school = School.find(params[:id])
        render json: school, status: :ok
    end

    def school_lookup
        school = School.find_by!(name: params[:school_name])
        render json: school.id, status: :ok
    end

    private

    def school_lookup_params
        permit.params(:school_name)
    end
end
