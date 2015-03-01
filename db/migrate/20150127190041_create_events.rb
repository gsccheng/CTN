class CreateEvents < ActiveRecord::Migration

  def change
    create_table :events do |t|
      t.string :title
      t.date :begin_date

      t.timestamp
    end
  end
end
