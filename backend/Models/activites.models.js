const mongoose = require("mongoose");

//Schema
//const Schema = mongoose.Schema;
const activiteSchema = new mongoose.Schema({
    type_activivte: String,
    calories: String,
    temps: String,
    distance: String,
    Date, String,
});

//Model
const Activite = mongoose.model('Activite', activiteSchema);

module.exports = Activite;