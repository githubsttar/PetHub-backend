class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner, :description, :tag
end
