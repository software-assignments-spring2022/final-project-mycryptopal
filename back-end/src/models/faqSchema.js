/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const FAQ = db.model('FAQ', schema);

module.exports = FAQ;
