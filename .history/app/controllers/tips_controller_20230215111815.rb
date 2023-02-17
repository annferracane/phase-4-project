class TipsController < ApplicationController
    def index
        render json: Tip.all, status: :ok
    end
end
