class Event < ActiveRecord::Base

  has_many :articles
  has_many :users, through: :articles

  validates_presence_of :title, :begin_date
  validates_uniqueness_of :title

end
