class PetSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :name, :owner, :description, :tag, :user_id, :location, :created_at, :fileBase64, :fileContentType

end
