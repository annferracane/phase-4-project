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
        render json: Item.find(params[:id]), status: :ok
      end

end
