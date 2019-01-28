class PetSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :name, :description, :tag, :location, :created_at, :picture
  
  def picture
    object.picture.attached?
    rails_blob_path(object.picture, only_path: true) if object.picture.attached?
  end

end
