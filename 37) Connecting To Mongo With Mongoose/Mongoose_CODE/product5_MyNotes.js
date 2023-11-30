// STATIC METHODS (on the line marked with red dot)

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log("HELLLO!!! HI!! HOWDY!!! ")
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCategory) {
    this.categories.push(newCategory);
    return this.save();
}


productSchema.statics.fireSale = function () {  // [mark -red dot]  |||  defining Static Method (pay att: 'statics.')
    return this.updateMany({}, { onSale: true, price: 0 })  // 'this' refers to the model (class). ex: Product  |||  {} means select everything.
}


const Product = mongoose.model('Product', productSchema);

const p = new Product({ name: "bike bag", price: 10 });


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" });
    foundProduct.greet();
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory("Outdoors");
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res))  // [mark -red dot]

findProduct();