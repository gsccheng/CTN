class CreateArticles < ActiveRecord::Migration

  def change
    create_table :articles do |t|
      t.integer :event_id
      t.integer :user_id
      t.string :short_desc
      t.text :content
      t.boolean :conspiracy?

      t.timestamp
    end
  end
end
