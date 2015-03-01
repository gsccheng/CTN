class Article < ActiveRecord::Base

  belongs_to :event
  belongs_to :user

  validates_presence_of :event_id, :user_id, :content, :conspiracy?
end
