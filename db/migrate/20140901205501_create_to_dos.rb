class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :title, null: false
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
