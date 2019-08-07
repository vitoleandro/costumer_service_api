const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  subject: {type: String, required: true},
  from: {type: String, required: true},
  fromEmail: {type: String, required: true},
  status: {type: String, default: 'waiting'},
  message: {type: String, required: true},
  company: {type: String, required: true}
},{
  timestamps: true
})

module.exports = mongoose.model('Contact', ContactSchema);