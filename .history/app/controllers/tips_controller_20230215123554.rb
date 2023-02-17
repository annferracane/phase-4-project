class TipsController < ApplicationController

    def index
        if params[:school_id]
            tips = School.find(params[:school_id]).tips
        elsif params[:user_id]
            tips = User.find(params[:user_id]).tips
        else
            tips = Tip.all
        end
        render json: tips, status: :ok
    end

    def show
        if params[:school_id]
            tip = School.find(params[:school_id]).tips.find(params[:id])
        elsif params[:user_id]
            tip = User.find(params[:user_id]).tips.find(params[:id])
        else
            tips = Tip.all
        end
        render json: Tip.find(params[:id]), status: :ok
    end

    def create
        tip = Tip.create!(tip_params)
        render json: tip, status: :created
    end

    def update
        tip = Tip.find(params[:id])
        render json: tip, status: :accepted
    end

    def destroy
        tip = Tip.find(params[:id])
        tip.destroy
        head :no_content
    end

    private

    def tip_params
        params.permit(:title, :on_or_off_campus, :category, :content, :school_id, :user_id)
    end

end
