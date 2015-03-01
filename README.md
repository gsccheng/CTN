CTN
Conspiricize the News

MVP
------- Layout --------
I. HOME PAGE
  a. Header
  b. Footer
  c. 2-sided layout scheme that explains how to use it.
  d. Use doge on the front page to lighten the mood more.
II. New Event route
  a. Search news feed to add news article.
  b. Goes to new form to add conspiracy.
III. Event route
  a. The left side (white on black) is the selected news article copied from an RSS feed.
  b. The right side (black on white) are all the articles posted to the news article.

 ------- MVP -------
1) Set up MVP layout
2) Users can log in and log out.
  Use Facebook API for login. Pivot to regular if too difficult
3) User can search from a list of news articles. Make sure to use restful routing to turn into events.
4) User can post news articles along with conspiracies.


Other Sites
http://www.programmableweb.com/news/81-news-apis-digg-fanfeedr-and-clearforest/2012/02/01

Possible additional features:
- Make login button toggable
- Be able to see all articles without being logged in
- Add a carousel for different news feeds
- Set up error messages to display properly
- Only highly rated members can create events
- Store news articles on database (probably need to buy rights)
- Most popular conspiracies on the front page
- Spinoff or mix with a STN, satirize the news.
- Conspiracy is broken up into a twitter sized short description that is expandable to the full article
- Users can search for posted events
- Users can vote on conspiricizes
- Users can post multiple news stories of the same event
- Users can vote on most accurate news stories
- Color code articles or allow users to pick their own colors
- Color shade to be a function of how popular an article is.
- Users can save drafts of their conspiracies to link to news articles later.




----- Schema ----

<?xml version="1.0" encoding="utf-8" ?>
<!-- SQL XML created by WWW SQL Designer, http://code.google.com/p/wwwsqldesigner/ -->
<!-- Active URL: https://socrates.devbootcamp.com/sql -->
<sql>
<datatypes db="mysql">
  <group label="Numeric" color="rgb(238,238,170)">
    <type label="Integer" length="0" sql="INTEGER" re="INT" quote=""/>
    <type label="Decimal" length="1" sql="DECIMAL" re="DEC" quote=""/>
    <type label="Single precision" length="0" sql="FLOAT" quote=""/>
    <type label="Double precision" length="0" sql="DOUBLE" re="DOUBLE" quote=""/>
  </group>

  <group label="Character" color="rgb(255,200,200)">
    <type label="Char" length="1" sql="CHAR" quote="'"/>
    <type label="Varchar" length="1" sql="VARCHAR" quote="'"/>
    <type label="Text" length="0" sql="MEDIUMTEXT" re="TEXT" quote="'"/>
    <type label="Binary" length="1" sql="BINARY" quote="'"/>
    <type label="Varbinary" length="1" sql="VARBINARY" quote="'"/>
    <type label="BLOB" length="0" sql="BLOB" re="BLOB" quote="'"/>
  </group>

  <group label="Date &amp; Time" color="rgb(200,255,200)">
    <type label="Date" length="0" sql="DATE" quote="'"/>
    <type label="Time" length="0" sql="TIME" quote="'"/>
    <type label="Datetime" length="0" sql="DATETIME" quote="'"/>
    <type label="Year" length="0" sql="YEAR" quote=""/>
    <type label="Timestamp" length="0" sql="TIMESTAMP" quote="'"/>
  </group>

  <group label="Miscellaneous" color="rgb(200,200,255)">
    <type label="ENUM" length="1" sql="ENUM" quote=""/>
    <type label="SET" length="1" sql="SET" quote=""/>
    <type label="Bit" length="0" sql="bit" quote=""/>
  </group>
</datatypes><table x="388" y="540" name="user">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="username" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="password" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="email" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
</table>
<table x="481" y="177" name="event">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="title" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="begin_date" null="1" autoincrement="0">
<datatype>DATE</datatype>
<default>NULL</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
</table>
<table x="72" y="251" name="article">
<row name="id" null="1" autoincrement="1">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="event_id" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="event" row="id" />
</row>
<row name="user_id" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default><relation table="user" row="id" />
</row>
<row name="short_desc" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="content" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<row name="conspiracy?" null="1" autoincrement="0">
<datatype>INTEGER</datatype>
<default>NULL</default></row>
<key type="PRIMARY" name="">
<part>id</part>
</key>
</table>
</sql>
