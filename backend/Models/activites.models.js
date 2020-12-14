const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const activiteSchema = new Schema({
    //  type_activivte: String,
    //  calories: String,
    //  temps: String,
    //  distance: String,
    //  Date, String,
     type_activite: {
         type: String,
         required: false,
     },
     calories: {
        type: Number,
        required: false,
    },
    temps: {
        type: Number,
        required: false,
    },
    distance: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
});

//Model
const Activite = mongoose.model('testPost', activiteSchema);
module.exports = Activite;