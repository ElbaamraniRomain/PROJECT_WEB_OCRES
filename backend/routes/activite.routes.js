const express = require('express');
const router = express.Router();
const Activite = require('../Models/activites.models');

//Routes
/* GET activity listing. */
  router.get('/', (req, res) => {

      Activite.find({})
      .then((data) => {
          console.log('Data: ', data);
          res.json(data);
      })
      .catch((error) => {
          console.log('error: ', error);
      });
  });

module.exports = router;
