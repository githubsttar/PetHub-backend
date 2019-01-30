require 'rails_helper'

RSpec.describe 'Pets API', type: :request do

  let!(:pets) { create_list(:pet, 10) }
  let(:pets_id) { pets.first.id }

  describe 'GET /pets' do
    before { get '/pets' }

    it 'returns pets' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /pets/:id' do
    before { get "/pets/#{pets_id}" }

    context 'when the record exists' do
      # it 'returns the pet' do
      #   byebug
      #   expect(json).not_to be_empty
      #   expect(json['id']).to eq(pets_id)
      # end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:pets_id) { 100 }

      it 'returns the status code' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Pet with 'id'=100/)
      end
    end
  end

  describe 'POST /pets' do
    let(:valid_attributes) { { name: 'spike', owner: 'Jamie', description: 'An amazing doggie', tag: 'Lost' } }

    context 'when the request is valid' do
      before { post '/pets', params: valid_attributes }

      it 'creates a pet' do
        expect(json['name']).to eq('spike')
        # expect(json['owner']).to eq('Jamie')
        expect(json['description']).to eq('An amazing doggie')
        expect(json['tag']).to eq('Lost')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end
  end

  describe 'PUT /pets/:id' do
    let(:valid_attributes) { { name: 'diamond' } }

    context 'when the record exists' do
      before { put "/pets/#{pets_id}", params: valid_attributes }

      it 'updates the record' do
        expect(json['name']).to eq('diamond')
      end

      it 'returns the status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /pets/:id' do
    before { delete "/pets/#{pets_id}" }

    it 'returns status code 304' do
      expect(response).to have_http_status(204)
    end
  end
end
