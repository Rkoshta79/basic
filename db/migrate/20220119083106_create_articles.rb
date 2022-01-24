class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :body
      t.string :author
      t.integer :pages
      t.timestamps
    end
  end
end
