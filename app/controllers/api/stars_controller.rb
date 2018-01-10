class Api::StarsController < ApplicationController
  def index
    query = params[:query]
    if query && query.length > 0
      @stars = Star.where("lower(name) LIKE ?", "%#{query.downcase}%")
    elsif query && query.length == 0
      @stars = []
    else
      @stars = Star.all
    end
  end

  def show
    @star = Star.find(params[:id])
  end
end
