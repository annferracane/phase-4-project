class TipsController < ApplicationController

    def index
        if params[:school_id]
            tips = School.find(params[:school_id]).tips
        else
            tips = Tip.all
        end
        render json: tips, status: :ok
    end

    def show
        render json: Tip.find(params[:id]), status: :ok
    end

    private

    def tip_params
        params.permit(:title, :description, :price, :user_id)
    end

end
