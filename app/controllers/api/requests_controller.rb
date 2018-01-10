class Api::RequestsController < ApplicationController

  def new
    @request = Request.new
  end

  def create
    @request = Request.new(request_params)
    @request.surfer_id = current_user.id
    if @request.save
      render :show
    else
      render json: @request.errors.full_messages, status: 422
    end
  end

  def show
    @request = Request.find(params[:id])
  end

  def index
    @requests = Request.where(host_id: params[:user_id])
  end

  def update
    @request = Request.find(params[:id])
    if @request.update(request_params)
      render :show
    else
      render json: @request.errors.full_messages, status: 422
    end
  end

  def destroy
    @request = Request.find(params[:id])
    @request.destroy!
    render :show
  end

  private

  def rental_request
    @request ||=
      Request.includes(:host).find(params[:id])
  end

  def current_host
    rental_request.host
  end

  def request_params
    params.require(:request).permit(:host_id, :end_date, :start_date, :status)
  end
end
