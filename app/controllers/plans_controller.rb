class PlansController < ApplicationController
  def edit
    if @plans
      @plans = Plan.all
    else
      @plans = Plan.new
    end
  end

  def update

  end


end
