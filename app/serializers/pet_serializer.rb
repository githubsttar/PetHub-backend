class PetSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :name, :owner, :description, :tag, :location, :created_at, :fileBase64, :fileContentType
  
  def picture
    object.picture.attached?
    rails_blob_path(object.picture, only_path: true) if object.picture.attached?
  end

end
