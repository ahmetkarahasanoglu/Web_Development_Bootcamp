const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});
// DELETING reviews when a campground is deleted (deleting the reviews of that campground from the database):
CampgroundSchema.post('findOneAndDelete', async function (doc) {  // delete, and assign what you deleted to 'doc'
    if (doc) {  // if there is a doc (if there was anything to be deleted)
        await Review.deleteMany({
            _id: {
                $in: doc.reviews  // delete all reviews where their '_id' field is in our 'doc' that was just deleted in its 'reviews' array.
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);
