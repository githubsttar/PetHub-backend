require 'rails_helper'

RSpec.describe 'Tags API', type: :request do
  # let(:tag) { FactoryBot.create(:tag) }
  let!(:tags) { create_list(:tag, 10) }
  let(:tags_id) { tags.first.id }

  describe 'GET /tags' do
    before { get '/tags' }

    it 'returns tags' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /tags/:id' do
    before { get "/tags/#{tags_id}" }

    context 'when the tag exists' do
      it 'returns the tag' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(tags_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:tags_id) { 100 }

      it 'returns the status code' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Tag with 'id'=100/)
      end
    end
  end

  describe 'POST /tags' do
    let(:valid_attributes) { { name: 'lost' } }

    context 'when the request is valid' do
      before { post '/tags', params: valid_attributes }

      it 'creates a tag' do
        expect(json['name']).to eq('lost')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/tags', params: { name: '' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  describe 'PUT /tags/:id' do
    let(:valid_attributes) { { name: 'lost' } }

    context 'when the record exists' do
      before { put "/tags/#{tags_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns the status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /tags/:id' do
    before { delete "/tags/#{tags_id}" }

    it 'returns status code 304' do
      expect(response).to have_http_status(204)
    end
  end
end
