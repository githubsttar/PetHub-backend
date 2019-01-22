class PetstagsController < ApplicationController

  before_action :set_pets_tags, only: [:show, :update, :destroy]

  def index
    @petstags = PetTag.all
    json_response(@petstags)
  end

end