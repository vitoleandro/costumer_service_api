const Company = require('./../models/company');
const company = {};

company.index =  async (req, res, next) => {
  const companies = await Company.find().sort('-createdAt');

  res.json(companies);
}

company.store = async (req, res, next) => {
  try {
    const company = await Company.create({...req.body})

    res.status(200);
    res.json(company);
  } catch(err) {
    res.status(422);
    res.json({...err.errors});
    
    next();
  }
}

module.exports = company;