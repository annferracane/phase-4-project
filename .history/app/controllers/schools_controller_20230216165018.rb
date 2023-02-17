class SchoolsController < ApplicationController

    skip_before_action :authorized_user, only: [:school_lookup]
    
    def index
        render json: School.limit(10), status: :ok
    end

    def show
        school = School.find(params[:id])
        render json: school, status: :ok
    end

    def school_lookup
        school_name_str = "'" + params[:school_name] + "'"
        school = School.find_by!(school_name: params[:school_name])
        school.id
    end

    private

    def school_lookup_params
        permit.params(:school_name)

    end
end
