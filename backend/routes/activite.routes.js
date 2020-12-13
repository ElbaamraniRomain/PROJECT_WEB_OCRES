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


// /* GET distance day. */
// router.get('/distancesDay', (req, res) => {
//     var date = new Date(), y = date.getFullYear(), m = date.getMonth(), d = date.getDay();
//     var morning = new Date(y, m, d);
//     console.log('date: ', date);
//     console.log('morning :', morning);
//     Activite.aggregate([
//         {
//             $match: {
//                 $and: [
//                     { date: { $gte: morning, $lte: date } }
//                 ]
//             }
//         },
//         { $group: { _id: "$type_activite", distance: { $sum: "$distance" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });

// /* GET distance week. */ // OK
// router.get('/distancesWeek', (req, res) => {

//     var date = new Date(), y = date.getFullYear(), m = date.getMonth(), d = date.getDay();
//     var firstdayWeek = new Date(y, m, d, 1);
//     var lastdayWeek = new Date(y, m, d + 7, 0);

//     console.log('date: ', date);
//     console.log('first day of the week: ', firstdayWeek);
//     console.log('last day of the week: ', lastdayWeek);

//     Activite.aggregate([
//         {
//             $match: { date: { $gte: firstdayWeek, $lte: lastdayWeek } }

//         },
//         { $group: { _id: "$type_activite", distance: { $sum: "$distance" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });

// /* GET distance month. */ // OK
// router.get('/distancesMonth', (req, res) => {
//     var date = new Date(), y = date.getFullYear(), m = date.getMonth();
//     var firstdayMonth = new Date(y, m, 2);
//     var lastdayMonth = new Date(y, m + 1, 0);
//     console.log('date: ', date);
//     console.log('first day of the month: ', firstdayMonth);
//     console.log('last day of the month: ', lastdayMonth);
//     Activite.aggregate([
//         {
//             $match: { date: { $gte: firstdayMonth, $lte: lastdayMonth } }
//         },
//         { $group: { _id: "$type_activite", distance: { $sum: "$distance" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });



// /* GET calories day. */
// /* GET calories week. */ // OK
// router.get('/caloriesWeek', (req, res) => {

//     var date = new Date(), y = date.getFullYear(), m = date.getMonth(), d = date.getDay();
//     var firstdayWeek = new Date(y, m, d, 1);
//     var lastdayWeek = new Date(y, m, d + 7, 0);

//     console.log('date: ', date);
//     console.log('first day of the week: ', firstdayWeek);
//     console.log('last day of the week: ', lastdayWeek);

//     Activite.aggregate([
//         {
//             $match: { date: { $gte: firstdayWeek, $lte: lastdayWeek } }

//         },
//         { $group: { _id: "$type_activite", calories: { $sum: "$calories" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });

// /* GET calories month. */ // OK
// router.get('/caloriesMonth', (req, res) => {
//     var date = new Date(), y = date.getFullYear(), m = date.getMonth();
//     var firstdayMonth = new Date(y, m, 2);
//     var lastdayMonth = new Date(y, m + 1, 0);
//     console.log('date: ', date);
//     console.log('first day of the month: ', firstdayMonth);
//     console.log('last day of the month: ', lastdayMonth);
//     Activite.aggregate([
//         {
//             $match: { date: { $gte: firstdayMonth, $lte: lastdayMonth } }
//         },
//         { $group: { _id: "$type_activite", calories: { $sum: "$calories" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });



// /* GET temps day. */
// /* GET temps week. */ //OK
// router.get('/tempsWeek', (req, res) => {

//     var date = new Date(), y = date.getFullYear(), m = date.getMonth(), d = date.getDay();
//     var firstdayWeek = new Date(y, m, d, 1);
//     var lastdayWeek = new Date(y, m, d + 7, 0);

//     console.log('date: ', date);
//     console.log('first day of the week: ', firstdayWeek);
//     console.log('last day of the week: ', lastdayWeek);

//     Activite.aggregate([
//         {
//             $match: { date: { $gte: firstdayWeek, $lte: lastdayWeek } }

//         },
//         { $group: { _id: "$type_activite", temps: { $sum: "$temps" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });

// /* GET temps month. */ //OK
// router.get('/tempsMonth', (req, res) => {
//     var date = new Date(), y = date.getFullYear(), m = date.getMonth();
//     var firstdayMonth = new Date(y, m, 2);
//     var lastdayMonth = new Date(y, m + 1, 0);
//     console.log('date: ', date);
//     console.log('first day of the month: ', firstdayMonth);
//     console.log('last day of the month: ', lastdayMonth);
//     Activite.aggregate([
//         {
//             $match: { date: { $gte: firstdayMonth, $lte: lastdayMonth } }
//         },
//         { $group: { _id: "$type_activite", temps: { $sum: "$temps" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });



// /* Post activité. */
// router.post('/addActivite', (req, res) => {
//     console.log('body: ', req.body);
//     res.json({
//         msg: "data received"
//     })
// });

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

    return {date, first, last};
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



// /* GET distance */
// router.get('/distances', (req, res) => {
//     const dataParam = setQuery(req.query.d);
//     Activite.aggregate([
//         {
//             $match: { date: { $gte: dataParam.first, $lte: dataParam.last } }

//         },
//         { $group: { _id: "$type_activite", distance: { $sum: "$distance" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
//     });

// /* GET calories */
// router.get('/calories', (req, res) => {
//     var date, first, last = '';
//     date, first, last = setQuery(req.query.d);
//     console.log(setQuery(req.query.d))
//     Activite.aggregate([
//         {
//             $match: { date: { $gte: first, $lte: last } }

//         },
//         { $group: { _id: "$type_activite", calories: { $sum: "$calories" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });

// /* GET temps */
// router.get('/temps', (req, res) => {
//     var date, first, last = '';
//     date, first, last = setQuery(req.query.d);
//     Activite.aggregate([
//         {
//             $match: { date: { $gte: first, $lte: last } }

//         },
//         { $group: { _id: "$type_activite", temps: { $sum: "$temps" } } },
//     ])
//         .then((data) => {
//             console.log('Data: ', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// });


module.exports = router;
