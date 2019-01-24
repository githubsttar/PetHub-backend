class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]

  def index
    @pets = Pet.all
    json_response(@pets)
  end

  def create
    @pet = Pet.create!(pet_params)
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
      params.permit(:name, :owner, :description, :tag, :pet_picture)
    end

    def set_pet
      @pet = Pet.find(params[:id])
    end
end
