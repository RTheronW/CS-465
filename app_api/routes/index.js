const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');                    // ← add this

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (authHeader == null) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }

  const headers = authHeader.split(' ');
  if (headers.length < 2) {
    console.log('Not enough tokens in Auth Header: ' + headers.length);
    return res.sendStatus(401);
  }

  const token = headers[1];

  if (token == null) {
    console.log('Null Bearer Token');
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      console.log('Token Validation Error!');
      return res.status(401).json({ message: 'Token Validation Error!' });
    }

    req.auth = verified;   
    next();                
  });
}

// Authentication routes
router
  .route('/register')
  .post(authController.register);

router
  .route('/login')
  .post(authController.login);

// Trips routes
router
  .route('/trips')
  .get(tripsController.tripsList) // GET  Method routes tripsList
  .post(authenticateJWT, tripsController.tripsAddTrip);     // POST Method adds a trip

  // GET Method routes tripsFindByCode - requies parameter
  // PUT Method routes tripsUpdateTrip - requires parameter
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);   

module.exports = router;