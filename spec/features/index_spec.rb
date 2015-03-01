require_relative '../spec_helper.rb'
# require 'spec_helper'
# require_relative '../factories'

describe "index controller" do
  before(:each) do
    Article.destroy_all
    User.destroy_all
    Event.destroy_all
  end

  context "/" do
    let!(:bob) { User.create!(username: 'bob', password: '123', email: "bob@bob.com") }
    let!(:my_event) { Event.create!(title: 'ebola', begin_date: "2001-01-01") }
    let!(:my_article) { Article.create!(event_id: my_event.id, user_id: bob.id, short_desc: "yeah yeah", content: "the real content", conspiracy?: true) }

    it "renders a successful status" do
      get '/'
      expect(last_response.status).to eq(200)
    end

  end

  # context "/users/:id/articles" do
  #   let!(:bob){ User.create!(username: 'bob', password: '123', email: "bob@bob.com") }
  #   let!(:my_article) { FactoryGirl.create :article, :user => bob }

  #   it "returns a list of articles from user in JSON format" do
  #     get "/users/#{bob.id}/articles"
  #     articles = JSON.parse( last_response.body )
  #     expect(articles.length).to eq(1)
  #   end
  # end

  # context "posts" do
  #   let!(:bob) { User.create!(username: 'bob', password: '123', email: "bob@bob.com") }
  #   let!(:my_article) { FactoryGirl.create :article, :user => bob }
  #   let(:valid_params) { {:user_id => bob.id, :body => my_article.body, :title => my_article.title} }
  #   it "creates an article and redirects with valid params" do
  #     expect {
  #       post '/users/:id/articles/new', :params => :valid_params
  #     }.to change { Article.count }.by(1)

    # let!(:bob){ User.create!(username: 'bob', name: 'Bob Smith', email: "bob@bob.com", bio: "cool guy") }
    # let!(:my_article) { FactoryGirl.create :article, :user => bob }

    # it "returns a list of articles from user in JSON format" do
    #   get "/users/#{bob.id}/articles"
    #   articles = JSON.parse( last_response.body )
    #   expect(articles.length).to eq(1)
  #   end
  # end
end