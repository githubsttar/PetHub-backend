class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_user, only: [:show, :destroy]

  def index
    @users = User.all
    json_response(@users)
  end

  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  # GET /users/:id
  def show
    json_response(@user)
  end

  def login
    query_result = User.find_by_sql ["SELECT * FROM users WHERE email = '#{params[:email]}'"]
    if query_result.any?
      user_details = { id: query_result[0].id, name: query_result[0].name, email: query_result[0].email }
      hmac_secret = ENV["JWT_SECRET"]
      token = JWT.encode(user_details, "#{hmac_secret}", 'HS256')
      cookies.signed[:jwt] = { value:  token, httponly: true }
      render json: user_details
    else
      render json: {
        error: 'Username or password incorrect'
      }, status: 404
    end
  end

  def destroy
    cookies.delete(:jwt)
  end

private

  def login_params
    params.permit(
      :email,
      :password_digest,
      )
  end

  def user_params
    params.permit(
      :name,
      :email,
      :password_digest,
      )
  end

  def find_user
    @user = User.find(params[:id])
  end
end
