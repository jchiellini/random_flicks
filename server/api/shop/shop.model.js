'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShopSchema = new Schema({
  name: String,
  price: Number,
  qty: Number,
  visible: Boolean,
  img: String,
  description: String,
  details: [],
  tags:[]
});

module.exports = mongoose.model('Shop', ShopSchema);