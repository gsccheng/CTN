class User < ActiveRecord::Base

  has_many :articles
  has_many :events, through: :articles

  validates_presence_of :username, :password, :email
  validates_uniqueness_of :username, :email
end
