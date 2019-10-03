const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
//controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');

const routes =  express.Router();
const upload = multer(uploadConfig)

// //test
// routes.get('/users', (req,resp) => {
//     return resp.json({"nome":"Luis","idade":27});
// });

routes.post('/sessions',SessionController.store);

routes.post('/spots',upload.single('thumbnail'),SpotController.store);
routes.get('/spots', SpotController.index );
routes.get('/dashboard', DashBoardController.show );
routes.post('/spots:spot_id/bookings',BookingController.store);

module.exports = routes;