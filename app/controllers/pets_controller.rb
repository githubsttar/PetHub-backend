class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]

  def index
    @pets = Pet.all
    json_response(@pets)
  end

  # POST /pets
  def create
    params[:file_content_type] = params[:file].instance_values['content_type']
    params[:file] = params[:file].instance_values['tempfile']
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

  def get_pet_image
    @pet = Pet.find(params[:id])
    # response.set_header('Content-Type', 'image/jpeg')
    # response.set_header('Content-Type', @pet[:file_content_type])
    # return @pet.file
    send_data @pet.file, type: @pet.file_content_type, disposition: 'inline', filename: 'test.jpeg'
  end

  private

    def pet_params
      params.permit(:name, :owner, :description, :tag, :file, :file_content_type)
    end

    def set_pet
      @pet = Pet.find(params[:id])
      return @pet
    end
end
