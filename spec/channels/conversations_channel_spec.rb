require "rails_helper"

RSpec.describe ConversationsChannel, type: :channel do

  it "subscribes to conversations stream when room id is provided" do
    subscribe(room_id: 42)
    expect(subscription).to be_confirmed
    expect(subscription).to have_stream_from("conversations_channel")
  end
end
