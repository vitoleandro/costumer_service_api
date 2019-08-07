const Contact = require('./../models/contact');
const contact = {}

contact.index = async (req, res) => {
  const contacts = await Contact.find().sort('-createdAt');

  res.json(contacts);
}

contact.store = async (req, res, next) => {
  try {
    const contact = await Contact.create({...req.body})

    res.status(200);
    res.json(contact);
  }catch(err) {
    res.status(422);
    res.json({...err.errors});

    next()
  }
}

module.exports = contact