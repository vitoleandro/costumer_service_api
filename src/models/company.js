const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {type: String, required: true},
  place: {type: String, required: true},
  status: {type: String, default: 'active'},
},
{
  timestamps: true,
})

module.exports = mongoose.model('Company', CompanySchema);