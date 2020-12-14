const express = require('express');
const router = express.Router();
const Activite = require('../Models/activites.models');

//Routes

/* Post activité. */
router.post('/addActivite', (req, res) => {
    console.log("body: ", req.body);

    const data = req.body;
    const newAcitivte = new Activite(data);

    newAcitivte.save()
        .then(() => res.json("Activite ajoutée"))
        .catch((error) => {
            console.error('error add: ', error);
        });
});

const setQuery = (requet) => {
    var date, first, last = '';
    switch (requet) {
        case 'd':

            break;
        case 'w':
            date = new Date(), y = date.getFullYear(), m = date.getMonth(), d = date.getDay();
            first = new Date(y, m, d, 1);
            last = new Date(y, m, d + 7, 0);
            break;
        case 'm':
            date = new Date(), y = date.getFullYear(), m = date.getMonth();
            first = new Date(y, m, 2);
            last = new Date(y, m + 1, 0);
            break;
        default:
            console.log('no parameters');
            break;
    }

    return { date, first, last };
}




/*  GET */
router.get('/:info', (req, res) => {
    const dataParam = setQuery(req.query.d);
    const info = req.params.info;
    Activite.aggregate([
        {
            $match: { date: { $gte: dataParam.first, $lte: dataParam.last } }

        },
        { $group: { _id: "$type_activite", info: { $sum: `$${info}` } } },
    ])
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.error('error: ', error);
        });
});


module.exports = router;
