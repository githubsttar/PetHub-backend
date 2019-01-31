require 'rails_helper'

RSpec.describe 'Users API', type: :request do

  let!(:users) { create_list(:user, 10) }
  let(:user_id) { users.first.id }

  describe 'GET /users' do
    before { get '/users' }

    it 'returns users' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /users' do

    let(:valid_attributes) { { name: 'louis', email: 'louis@gmail.com', password_digest: '1234566' } }

    context 'when the request is valid' do

      before { post '/users', params: valid_attributes }

      it 'creates a user' do
        puts json
        expect(json['name']).to eq('louis')
        expect(json['email']).to eq('louis@gmail.com')
        expect(json['password_digest']).to eq('1234566')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end
  end
end
