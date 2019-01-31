require 'rails_helper'

RSpec.describe Conversation, type: :model do
  it "is valid with valid attributes" do
    expect(Conversation.new).to be_valid
  end

  # it { should validate_presence_of(:message) } 
end
