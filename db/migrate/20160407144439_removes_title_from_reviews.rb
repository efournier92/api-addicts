class RemovesTitleFromReviews < ActiveRecord::Migration
  def change
    remove_column :reviews, :title
  end
end
