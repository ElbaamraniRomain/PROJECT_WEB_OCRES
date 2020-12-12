const express = require('express');
const router = express.Router();
const Activite = require('../Models/activites.models');

//Routes
/* GET all activités. */
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

/* GET perf week. */


/* GET distance day. */
router.get('/distancesDay', (req, res) => {
    var date = new Date();
    var morning = date.getDate() - 1;
    console.log('date: ', date);
    console.log('morning :', morning);
    Activite.aggregate([
        {
            $match: {
                $and: [
                    { date: { $gte: morning, $lte: date } }
                ]
            }
        },
        { $group: { _id: "$type_activite", distance: { $sum: "$distance" } } },
    ])
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

/* GET distance week. */
router.get('/distancesWeek', (req, res) => {

    var date = new Date(), y = date.getFullYear(), m = date.getMonth(), d = date.getDay();
    var firstdayWeek = new Date(y, m, d, 1);
    var lastdayWeek = new Date(y, m, d + 7, 0);

    console.log('date: ', date);
    console.log('first day of the week: ', firstdayWeek);
    Activite.aggregate([
        {
            $match: {
                $and: [
                    { Date: { $gte: firstdayWeek, $lte: lastdayWeek } }
                ]
            }
        },
        { $group: { _id: null, distance: { $sum: "$distance" } } },
    ])
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});
/* GET distance month. */ // OK
router.get('/distancesMonth', (req, res) => {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstdayMonth = new Date(y, m, 2);
    var lastdayMonth = new Date(y, m + 1, 0);
    console.log('date: ', date);
    console.log('first day of the month: ', firstdayMonth);
    console.log('last day of the month: ', lastdayMonth);
    Activite.aggregate([
        {
            $match: { date: { $gte: firstdayMonth, $lte: lastdayMonth} }
        },
        { $group: { _id: "$type_activite", distance: { $sum: "$distance" } } },
    ])
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

/* GET calories day. */
/* GET calories week. */
/* GET calories month. */
router.get('/caloriesMonth', (req, res) => {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstdayMonth = new Date(y, m, 2);
    var lastdayMonth = new Date(y, m + 1, 0);
    console.log('date: ', date);
    console.log('first day of the month: ', firstdayMonth);
    console.log('last day of the month: ', lastdayMonth);
    Activite.aggregate([
        {
            $match: { date: { $gte: firstdayMonth, $lte: lastdayMonth} }
        },
        { $group: { _id: "$type_activite", calories: { $sum: "$calories" } } },
    ])
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});


/* GET temps day. */
/* GET temps week. */
/* GET temps month. */
router.get('/tempsMonth', (req, res) => {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstdayMonth = new Date(y, m, 2);
    var lastdayMonth = new Date(y, m + 1, 0);
    console.log('date: ', date);
    console.log('first day of the month: ', firstdayMonth);
    console.log('last day of the month: ', lastdayMonth);
    Activite.aggregate([
        {
            $match: { date: { $gte: firstdayMonth, $lte: lastdayMonth} }
        },
        { $group: { _id: "$type_activite", temps: { $sum: "$temps" } } },
    ])
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});


/* Post activité. */


module.exports = router;
