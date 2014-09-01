class Api::TasksController < ApplicationController
	skip_before_filter :verify_authenticity_token
	respond_to :json

	def index
		@tasks = Task.all.order("completed ASC").order("id DESC")
		render json: @tasks
	end

	def show
		@task = Task.find(params[:id])
		render json: @task
	end

	def update
		@task = Task.find(params[:id])
		if @task.update(todo_params)
			respond_to do |format|
				format.json { render json: @task }
			end
		end
	end

	def destroy
		respond_with Task.destroy(params[:id])
	end

private

	def todo_params
		params.require(:task).permit(:title, :completed)
	end
end
