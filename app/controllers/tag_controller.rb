class TagController < ApplicationController

  before_action :set_tag, only: [:show, :update, :destroy]

  def index
    @tags = Tag.all
    json_response(@tags)
  end

end
