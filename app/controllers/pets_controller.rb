require 'users_controller'
class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]

  def index
    @pets = Pet.all
    if params[:tag]
      @pets = @pets.where(tag: params[:tag])
    end
    json_response(@pets)
  end

  def create
    @pet = Pet.new(pet_params)
    if @pet.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        PetSerializer.new(@pet)
      ).serializable_hash
    end
    json_response(@pet, :created)
  end

  # GET /pets/:id
  def show
    json_response(@pet)
  end

  # PUT /pets/:id
  def update
    @pet.update(pet_params)
    head :no_content
  end

  # DELETE /pets/:id
  def destroy
    @pet.destroy
    head :no_content
  end

  private

    def pet_params
      params.permit(:name, :owner, :description, :tag, :location, :fileBase64, :fileContentType)
    end

    def set_pet
      @pet = Pet.find(params[:id])
    end

end
