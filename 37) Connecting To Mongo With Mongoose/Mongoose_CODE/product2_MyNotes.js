const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })  // Originally it was written as 'localhost:27017'. But since it gave an error on terminal, I searched on internet and corrected it.
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({  // This block is about 'schema validation'.
    name: {                 // This schema writing pattern has more details than the one in 'index.js' where we only wrote:   title: String,  year: Number  etc.        
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number
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
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 599, categories: ["cycling", "safety"] });  // If we add here:  color: 'red'  it will not cause any error (about schema validation) but  color: 'red'  will not be saved to database; because 'color' was not specified in schema validation block above.
bike.save()
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err)  // output:  Path 'name' is required  (if we don't enter a name for the product on the line:  const bike = new Product({name: "Mountain Bike", price: 599 })  )  . We had set 'name' as 'required' way above(↑)        
                          // output: Product validation failed: price: Cast to Number failed for value "hello" at path "price"  . We had set price's type as 'Number' way above(↑), and we tried to give value "hello" to price.
    })
