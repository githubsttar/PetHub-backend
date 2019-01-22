class PetstagsController < ApplicationController

  before_action :set_pets_tags, only: [:show, :update, :destroy]

  def index
    @petstags = PetTag.all
    json_response(@petstags)
  end

  def show
    json_response(@petstags)
  end

  private

  def set_pets_tags
    @petstags = PetTag.find(params[:id])
  end

end
