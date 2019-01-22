require 'rails_helper'

class TagController < ApplicationController

  before_action :set_tag, only: [:show, :update, :destroy]

  def index
    @tags = Tag.all
    json_response(@tags)
  end


  def create
    @tag = Tag.create!(tag_params)
    json_response(@tag, :created)
  end

  # GET /pets/:id
  def show
    json_response(@tag)
  end

  # PUT /pets/:id
  def update
    @tag.update(tag_params)
    head :no_content
  end

  # DELETE /pets/:id
   def destroy
    @tag.destroy
    head :no_content
  end

  private

  def tag_params
    # whitelist params
    params.permit(:name)
  end

  def set_tag
    @tag = Tag.find(params[:id])
  end

end
