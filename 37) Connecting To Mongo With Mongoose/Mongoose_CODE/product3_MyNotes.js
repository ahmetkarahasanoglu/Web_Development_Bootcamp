// VALIDATING MONGOOSE UPDATES (on the line marked with red dot)

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })  // Originally it was written as 'localhost:27017'. But since it gave an error on terminal, I searched on internet and corrected it.
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({  // Schema.  Schema Validation is 'conforming with schema'.
    name: {                 // This schema writing pattern has more details than the one in 'product.js' where we only wrote:   title: String, year: Number  etc.        
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']  // ~ Mongoose Validation Errors
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],  //  turns the content of an array into string
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

const Product = mongoose.model('Product', productSchema);


// const bike = new Product({ name: "Tire Pump", price: 100, categories: ["cycling"] })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })


// **** VALIDATING MONGOOSE UPDATES: ****
Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -50 }, { new: true, runValidators: true })  // If we don't write 'runValidators: true' : When updating, if we update the value of price to a negative number: as opposed to our expectancy, it will accept it and won't give error (we had set  price: min 0  in schema validation way above(↑)).  If we add  {runValidator: true}  option, it will get things in order and terminal will give an error when the value is tried to be updated to a negative value.
    .then(data => {                                                                                  // '--> ( 'new: true' means that function will return the new updated object)
        console.log("IT WORKED!")
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err)
    })
