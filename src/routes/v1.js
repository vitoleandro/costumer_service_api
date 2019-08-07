const express           = require('express');
const CompanyController = require('./../controllers/CompanyController');
const ContactController = require('./../controllers/ContactController');

const routes            = new express.Router();

/**
 * 
 * Companies Routes
 *  
 * */ 
routes.get('/companies', CompanyController.index);
routes.post('/company', CompanyController.store);

/**
 * 
 * Contacts Routes
 *  
 * */ 
routes.get('/contacts', ContactController.index)
routes.post('/contact', ContactController.store);

module.exports = routes;