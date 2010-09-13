from google.appengine.ext import db

class Piece(db.Model):
    author = db.UserProperty()
    path = db.TextProperty()
    date = db.DateTimeProperty(auto_now_add=True)
    address = db.StringProperty(multiline=False)

class Location(db.Model):
    author = db.UserProperty()
    x = db.FloatProperty()
    y = db.FloatProperty()
    width = db.FloatProperty()
    height = db.FloatProperty()