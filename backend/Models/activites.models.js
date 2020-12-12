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
         required: true,
     },
     calories: {
        type: String,
        required: true,
    },
    temps: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
});

//Model
const Activite = mongoose.model('testPost', activiteSchema);
module.exports = Activite;