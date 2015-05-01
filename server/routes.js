/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  //IMPORTANT FOR IMAGE UPLOAD
  var multer  = require('multer');
  app.use(multer({
    dest: 'client/uploads/',
    rename: function (fieldname, filename) {
      return filename+Date.now();
    },
    limits: {
      fieldNameSize: 50
//      files: 1,
//      fields: 5,
//      fileSize: 1024 * 1024
    },
    onFileUploadStart: function(file) {
      console.log('Starting file upload process.');
      if(file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
        return false;
      }
    },
    inMemory: true //This is important. It's what populates the buffer.
  }));

  // Insert routes below
  app.use('/api/tags', require('./api/tag'));
  app.use('/api/images', require('./api/image'));
  app.use('/api/shops', require('./api/shop'));
  app.use('/api/emails', require('./api/email'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
