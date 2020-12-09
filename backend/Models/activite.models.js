
const mongoose = require ("mongoose"),
const activiteSchema = new Mongoose.Schema({
    type_activite:String,
    calories: String,
    distance: String,
    temps: String,
    date: Date,
});

const Activite = mongoose.model(Activite,activiteSchema);
module.exports = Activite;