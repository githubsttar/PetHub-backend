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
  end
end
