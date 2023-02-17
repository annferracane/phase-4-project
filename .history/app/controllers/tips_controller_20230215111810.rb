class TipsController < ApplicationController
    def index
        render json: Tip.all
    end
end
