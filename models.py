from google.appengine.ext import db

class Image(db.Model):
    title = db.StringProperty()
    full_size = db.BlobProperty()
    thumb_nail = db.BlobProperty()

class Puzzle(db.Model):
    name = db.StringProperty(multiline=False)
    image = db.ReferenceProperty(Image)

class Piece(db.Model):
#    puzzle = db.ReferenceProperty(Puzzle)
    date = db.DateTimeProperty(auto_now_add=True)
    address = db.StringProperty(multiline=False)
    path = db.TextProperty()

class Location(db.Model):
    piece = db.ReferenceProperty(Piece)
    author = db.UserProperty()
    date = db.DateTimeProperty(auto_now_add=True)
    x = db.FloatProperty()
    y = db.FloatProperty()
    width = db.FloatProperty()
    height = db.FloatProperty()
