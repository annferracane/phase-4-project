class TipsController < ApplicationController
    def index
        if params[:school_id]
            tips =
        else

        end
        render json: Tip.all, status: :ok
    end

    def index
        if params[:user_id]
         items = User.find(params[:user_id]).items
        else 
         items = Item.all
        end
         render json: items, include: :user, status: :ok
       end
end
