const express = require('express');
const router = express.Router();
const Activite = require('../Models/activites.models');

//Routes
/* GET activity listing. */
//  router.get('/', (req, res) => {

//      Activite.find({})
//      .then((data) => {
//          console.log('Data: ', data);
//          res.json(data);
//      })
//      .catch((error) => {
//          console.log('error: ', error);
//      });
//  });

 router.get('/', async (req, res) => {
    try {
        // on récupère les consommation depuis la db
        let data = await Activite.find();

        res.json(data)

    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
})

module.exports = router;
