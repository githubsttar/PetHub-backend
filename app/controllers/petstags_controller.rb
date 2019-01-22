class PetstagsController < ApplicationController
  before_action :set_pets_tags, only: [:show, :update, :destroy]

  def index
    @petstags = PetTag.all
    json_response(@petstags)
  end

  def create
    @petstags = PetTag.create!(petstags_params)
    json_response(@petstags, :created)
  end

  def show
    json_response(@petstags)
  end

  def update
  end

  def destroy
  end

  private

    def petstags_params
      params.permit(:pet_id, :tag_id)
    end

    def set_pets_tags
      @petstags = PetTag.find(params[:id])
    end
end
