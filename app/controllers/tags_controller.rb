class TagsController < ApplicationController

  before_action :set_tags, only: [:show, :update, :destroy]

  def index
    @tags = Tag.all
    json_response(@tags)
  end

  def create
    @tag = Tag.create!(tag_params)
    json_response(@tag, :created)
  end

  private

  def tag_params
    # whitelist params
    params.permit(:name)
  end


end
