const express = require('express');

const OngController = require('./controllers/OngsController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileControler')
const SessionController = require('./controllers/SessionController')

const routes =  express.Router();


routes.post('/sessions',  SessionController.create);

routes.get('/profile',  ProfileController.listarTodas);

routes.get('/ongs',  OngController.listarTodas);
routes.post('/ongs',  OngController.create);

routes.get('/incidents',  IncidentsController.listarTodas);
routes.post('/incidents',  IncidentsController.create);
routes.delete('/incidents/:id',  IncidentsController.delete);

module.exports = routes;