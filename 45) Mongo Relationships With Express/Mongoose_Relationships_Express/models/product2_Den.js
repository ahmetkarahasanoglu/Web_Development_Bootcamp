const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    },
    farm: {
        type: Schema.Types.ObjectId,    // important
        ref: 'Farm'                     // important. In this model that we designed, we made two relation, one from each (product.js to farm.js; and farm.js to product.js)
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product; 