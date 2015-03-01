# Homepage
get '/' do
  @logged_in_user = User.find(session[:user_id]) if session[:user_id]
  # p'-'*50
  # puts session[:user_id]
  # puts @logged_in_user
  @news_feed = NewsFeed.get_title_link("/InternationalHome.xml")
  @last_5_events = Event.order('id DESC').limit(5)
  @conspiracies = Article.all
  @my_conspiracies = []
  if @logged_in_user
    @my_conspiracies = @logged_in_user.events
  end
  erb :index
end

# Register user
post '/register' do
    user = User.create(username: params[:username], email: params[:email], password: params[:password])
    session[:user_id] = user.id
    # @error_messages = user.errors.full_messages
    content_type :json
    user.username.to_json
end

# Sign-in user
post '/signin' do
  p '-'*50
  user = User.find_by(username: params[:username])
  if user.password == params[:password]
    session[:user_id] = user.id
    content_type :json
    user.to_json
  else
    500
  end
end

# Sign-out user
post '/signout' do
  session[:user_id] = nil
  session[:event_id] = nil
  # content_type :json
  # 200.to_json
  200
end

# Post an event
post '/user/:id/event' do
  event = Event.create(params[:input])
  puts event
  content_type :json
  event.to_json
end

# Generate articles
post '/events/:id' do
  session[:event_id] = params[:id]
  event = Event.find(params[:id])
  articles = event.articles
  content_type :json
  articles.to_json
end

# Post a conspiracy
post '/users/:id/events/articles/new' do
  p '-'*50
  puts params[:content]
  puts session[:event_id]
  puts params[:id]
  article = Article.create(content: params[:content], event_id: session[:event_id], conspiracy?: true, user_id: params[:id])
    content_type :json
    article.to_json
end
