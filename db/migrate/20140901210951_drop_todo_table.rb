class DropTodoTable < ActiveRecord::Migration
  def change
  	drop_table :to_dos
  end
end
