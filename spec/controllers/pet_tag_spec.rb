require 'rails_helper'

RSpec.describe 'Pets Tags API', type: :request do

  let!(:pets_tags) { create_list(:pet_tag, 10) }
  let(:pet_tag_id) { pets_tags.first.id }



  describe 'GET /petstags' do
    before { get '/petstags' }

    it 'returns pets tags' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /petstags/:id' do
    before { get "/petstags/#{pet_tag_id}" }

    context 'when the pets tag exists' do
      it 'returns the pets tag' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(pet_tag_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when pets tags does not exist' do
      let(:pet_tag_id) { 100 }

      it 'returns the status code' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find PetTag with 'id'=100/)
      end
    end
  end


end
