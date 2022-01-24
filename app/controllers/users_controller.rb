class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
      end
      def create
        @users = User.new(user_params)
        if @users.save
        render json: @users, status: :created
        else
         render json: @users.errors, status: :unprocessable_entity
        end
     end

     def login
      user = User.find_by_email(params[:email])

      if user.password==(params[:password])
        render json: user
      else
        render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
      end
  
    end

     private
 def user_params
    params.permit(:username, :email, :password)
  end
end
