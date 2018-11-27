class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :language
      t.string :genre
      t.string :publisher
      t.string :publication_data
      t.integer :rating
      t.references :author, foreign_key: true

      t.timestamps
    end
  end
end
