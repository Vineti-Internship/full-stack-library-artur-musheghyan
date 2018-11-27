class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :language, :genre, :publisher, :publication_data, :rating
  has_one :author
end
