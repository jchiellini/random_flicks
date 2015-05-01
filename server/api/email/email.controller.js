'use strict';

var _ = require('lodash');
var Email = require('./email.model');
var path           = require('path'),
  templatesDir   = path.resolve(__dirname, '..', 'templates'),
  emailTemplates = require('email-templates'),
  nodemailer     = require('nodemailer'),
  site_address   = 'bigchi@gmail.com';

//emailTemplates(templatesDir, function(err, template) {
//
//  if (err) {
//    console.log(err);
//  } else {
//
//    // ## Send a single email
//
//    // Prepare nodemailer transport object
//    var transport = nodemailer.createTransport("SMTP", {
//      service: "Gmail",
//      auth: {
//        user: "bigchi@gmail.com",
//        pass: "Jos2505!@"
//      }
//    });
//
//    // An example users object with formatted email function
//    var locals = {
//      email: 'bigchi@gmail.com',
//      name: {
//        first: 'Mamma',
//        last: 'Mia'
//      }
//    };
//
//    // Send a single email
//    template('welcome-email', locals, function(err, html, text) {
//      if (err) {
//        console.log(err);
//      } else {
//        transport.sendMail({
//          from: 'Spicy Meatball <spicy.meatball@spaghetti.com>',
//          to: locals.email,
//          subject: 'Mangia gli spaghetti con polpette!',
//          html: html,
//          // generateTextFromHTML: true,
//          text: text
//        }, function(err, responseStatus) {
//          if (err) {
//            console.log(err);
//          } else {
//            console.log(responseStatus.message);
//          }
//        });
//      }
//    });
//
//
//    // ## Send a batch of emails and only load the template once
//
//    // Prepare nodemailer transport object
////    var transportBatch = nodemailer.createTransport("SMTP", {
////      service: "Gmail",
////      auth: {
////        user: "some-user@gmail.com",
////        pass: "some-password"
////      }
////    });
////
////    // An example users object
////    var users = [
////      {
////        email: 'pappa.pizza@spaghetti.com',
////        name: {
////          first: 'Pappa',
////          last: 'Pizza'
////        }
////      },
////      {
////        email: 'mister.geppetto@spaghetti.com',
////        name: {
////          first: 'Mister',
////          last: 'Geppetto'
////        }
////      }
////    ];
////
////    // Custom function for sending emails outside the loop
////    //
////    // NOTE:
////    //  We need to patch postmark.js module to support the API call
////    //  that will let us send a batch of up to 500 messages at once.
////    //  (e.g. <https://github.com/diy/trebuchet/blob/master/lib/index.js#L160>)
////    var Render = function(locals) {
////      this.locals = locals;
////      this.send = function(err, html, text) {
////        if (err) {
////          console.log(err);
////        } else {
////          transportBatch.sendMail({
////            from: 'Spicy Meatball <spicy.meatball@spaghetti.com>',
////            to: locals.email,
////            subject: 'Mangia gli spaghetti con polpette!',
////            html: html,
////            // generateTextFromHTML: true,
////            text: text
////          }, function(err, responseStatus) {
////            if (err) {
////              console.log(err);
////            } else {
////              console.log(responseStatus.message);
////            }
////          });
////        }
////      };
////      this.batch = function(batch) {
////        batch(this.locals, templatesDir, this.send);
////      };
////    };
////
////    // Load the template and send the emails
////    template('newsletter', true, function(err, batch) {
////      for(var user in users) {
////        var render = new Render(users[user]);
////        render.batch(batch);
////      }
////    });
//
//  }
//});

var locals = {};

var createTransport = function(){
  return nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      user: site_address,
      pass: "Jos2505@"
    }
  });
};

var types = {
  single:function(locals){
    var error = false;
    emailTemplates(templatesDir,function(err, template){
      if (err) {
        console.log("1",err);
        error = err;
      } else {

        // Prepare nodemailer transport object
        var transport = createTransport();

        // Send a single email
        template(locals.type, locals, function(err, html, text) {
          if (err) {
            console.log("2",err);
            error = err;

          } else {
            transport.sendMail({
              from: locals.name+' <'+locals.email+'>',
              to: site_address,
              subject: locals.subject,
              html: html,
              // generateTextFromHTML: true,
              text: text
            }, function(err, responseStatus) {

              if (err) {
                console.log("3",err);
                error = err;
              } else {
                console.log(responseStatus.message);
              }

            });
          }
        });



      }
    });
    return error;
   },
  multiple: function(locals){
    // Prepare nodemailer transport object
    var transportBatch = createTransport();

    // An example users object
//    var users = [
//      {
//        email: 'pappa.pizza@spaghetti.com',
//        name: {
//          first: 'Pappa',
//          last: 'Pizza'
//        }
//      },
//      {
//        email: 'mister.geppetto@spaghetti.com',
//        name: {
//          first: 'Mister',
//          last: 'Geppetto'
//        }
//      }
//    ];

    // Custom function for sending emails outside the loop
    //
    // NOTE:
    //  We need to patch postmark.js module to support the API call
    //  that will let us send a batch of up to 500 messages at once.
    //  (e.g. <https://github.com/diy/trebuchet/blob/master/lib/index.js#L160>)

//    var Render = function(locals) {
//      this.locals = locals;
//      this.send = function(err, html, text) {
//        if (err) {
//          console.log(err);
//        } else {
//          transportBatch.sendMail({
//            from: locals.name+' <'+locals.email+'>',
//            to: site_address,
//            subject: locals.subject,
//            html: html,
//            // generateTextFromHTML: true,
//            text: text
//          }, function(err, responseStatus) {
//            if (err) {
//              console.log(err);
//            } else {
//              console.log(responseStatus.message);
//            }
//          });
//        }
//      };
//      this.batch = function(batch) {
//        batch(this.locals, templatesDir, this.send);
//      };
//    };
//
//    // Load the template and send the emails
//    template(locals.type, true, function(err, batch) {
//      for(var user in locals.data) {
//        var render = new Render(locals.data[user]);
//        render.batch(batch);
//      }
//    });
  }
};

function email(data,isMultiple){
  console.log(data);
  var key = isMultiple ? "multiple" : "single";
  console.log("KEY",key);
  return types[key](data);
}



// Get list of emails
//exports.index = function(req, res) {
//  Email.find(function (err, emails) {
//    if(err) { return handleError(res, err); }
//    return res.json(200, emails);
//  });
//};

// Get a single email
//exports.show = function(req, res) {
//  Email.findById(req.params.id, function (err, email) {
//    if(err) { return handleError(res, err); }
//    if(!email) { return res.send(404); }
//    return res.json(email);
//  });
//};

// Creates a new email in the DB.
exports.create = function(req, res) {
  var err = email(req.body,req.body.isMultiple);
  console.log("ERR", err);
  if(err){
    return handleError(res, err); }
  else {
    return res.json(201, req.body); }
//  Email.create(req.body, function(err, email) {
//    if(err) { return handleError(res, err); }
//    return res.json(201, email);
//  });
};

// Updates an existing email in the DB.
//exports.update = function(req, res) {
//  if(req.body._id) { delete req.body._id; }
//  Email.findById(req.params.id, function (err, email) {
//    if (err) { return handleError(res, err); }
//    if(!email) { return res.send(404); }
//    var updated = _.merge(email, req.body);
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, email);
//    });
//  });
//};

// Deletes a email from the DB.
//exports.destroy = function(req, res) {
//  Email.findById(req.params.id, function (err, email) {
//    if(err) { return handleError(res, err); }
//    if(!email) { return res.send(404); }
//    email.remove(function(err) {
//      if(err) { return handleError(res, err); }
//      return res.send(204);
//    });
//  });
//};

function handleError(res, err) {
  return res.send(500, err);
}