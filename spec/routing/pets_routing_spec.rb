require "rails_helper"

RSpec.describe V1::PetsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/pets").to route_to("v1/pets#index")
    end

    it "routes to #show" do
      expect(get: "/pets/1").to route_to("v1/pets#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/pets").to route_to("v1/pets#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/pets/1").to route_to("v1/pets#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/pets/1").to route_to("v1/pets#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/pets/1").to route_to("v1/pets#destroy", id: "1")
    end
  end
end
