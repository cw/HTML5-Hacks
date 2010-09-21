#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import logging

from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template
from google.appengine.api import memcache
from google.appengine.api import images

from models import Piece, Location

logging.getLogger().setLevel(logging.DEBUG)

config = {"SITE_NAME": "HTML5 Hacks"}

IS_DEV = os.environ['SERVER_SOFTWARE'].startswith('Dev')  # Development server
logging.debug("IS_DEV: %s" % IS_DEV)

class MainHandler(webapp.RequestHandler):
    def get(self):
        template_values = {
            "title": "HTML5 Hacks index",
            "is_dev": IS_DEV,
            "config": config
        }
        path = os.path.join(os.path.dirname(__file__), 'templates/index.html')
        self.response.out.write(template.render(path, template_values))

class SvgHandler(webapp.RequestHandler):

    def get_pieces(self):
        pieces = memcache.get("pieces")
        if pieces is not None:
            return pieces
        else:
            pieces = Piece.gql("ORDER BY address ASC")
            if not memcache.add("pieces", pieces, 10):
                logging.error("Memcache set failed.")
            return pieces

    def get(self):

        pieces = self.get_pieces()
        locations = Location.gql("ORDER BY x ASC")
        svg_path = os.path.join(os.path.dirname(__file__), 'templates/puzzle.svg')
        svg_values = {
            "pieces": pieces,
            "locations": locations,
        }
        svg_text = template.render(svg_path, svg_values)
        template_values = {
            "title": "HTML5 Hacks: SVG",
            "config": config,
            "svg_text": svg_text,
            "is_dev": IS_DEV,
            "rows": ["A", "B", "C", "D", "E", "F", "G", "H"],
            "cols": ["1", "2", "3", "4", "5", "6", "7", "8"],
        }
        path = os.path.join(os.path.dirname(__file__), 'templates/svg.html')
        self.response.out.write(template.render(path, template_values))

class CanvasHandler(webapp.RequestHandler):
    def get(self):
        template_values = {
            "title": "HTML5 Hacks: canvas",
            "is_dev": IS_DEV,
            "config": config
        }
        path = os.path.join(os.path.dirname(__file__), 'templates/canvas.html')
        self.response.out.write(template.render(path, template_values))


def main():
    application = webapp.WSGIApplication([('/', MainHandler),
                                          ('/svg', SvgHandler),
                                          ('/canvas', CanvasHandler),
                                         ],
                                         debug=True)
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
