require 'httparty'

class NewsFeed
  include HTTParty
  base_uri 'rss.nytimes.com/services/xml/rss/nyt'
  # default_params :output => 'json'
  format :xml

  def initialize()
    # self.class.basic_auth user, pass
  end

  def self.get_title_link(short_path)
    arr = get(short_path).parsed_response['rss']['channel']['item']
    title_links = []
    arr.each do |story|
      title_links << {"title" => story["title"],
      "link" => story["link"][0]["href"] }
      # puts story["link"][0]["href"]
    end
    title_links
  end
end
