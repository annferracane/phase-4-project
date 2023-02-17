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

    def create
        tip = Tip.create!(items_params)
        render json: item, status: :created
    end

    private

    def tip_params
        params.permit(:title, :on_or_off_campus, :category, :content, :school_id, :user_id)
    end

end