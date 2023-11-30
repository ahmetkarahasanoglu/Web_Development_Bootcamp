const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // a shorthand for us

const CampgroundSchema = new Schema ({
    title: String,
    price: String,
    description: String,
    location: String
})

module.exports = mongoose.model('Campground', CampgroundSchema);
