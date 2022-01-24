class ArticlesController < ApplicationController
    def index
        @articles = Article.all
        render json: @articles.order("id DESC")
      end
      def show
        @articles = Article.find(params[:id])
        render json: @articles
    end 
    def create
       @articles = Article.new(article_params)
       if @articles.save
       render json: @articles, status: :created
       else
        render json: @articles.errors, status: :unprocessable_entity
       end
    end
    def update
        begin
        @articles = Article.find(params[:id])
        if @articles.update(article_params)
            render json: @articles, status: :ok
        end
    rescue
            render json: @articles, status: :unprocessable_entity
        end
  
private
def article_params
    params.permit(:title, :body, :author, :pages)
end
end
