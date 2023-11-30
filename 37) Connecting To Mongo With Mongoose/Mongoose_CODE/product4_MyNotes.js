// ~ MODEL INSTANCE METHODS: (Adding Our Own Custom Methods to Schema).

// Info:
// instance methods: are available on every instance (object). 
// class method (or static method): available on the class; ex:  Product.find()

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


// ****  MODEL INSTANCE METHODS: (Adding Our Own Custom Methods to Schema) ****
productSchema.methods.greet = function () {  // Instance (object) method. [Model Instance Method]. Defining our own function. ('greet' is our own defined function here)
    console.log("HELLLO!!! HI!! HOWDY!!! ")  // '--> We will have access to this greet() method on every instance (object). Also when we make query, the found objects have access to greet() method too.
    console.log(`- from ${this.name}`)       // 'this' refers to the object when function will be executed.
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;  // (flipping true to false, or false to true)
    return this.save();  // we save it, to take effect.
}

productSchema.methods.addCategory = function (newCategory) {
    this.categories.push(newCategory);
    return this.save();
}


const Product = mongoose.model('Product', productSchema);  // We passed the 'productSchema' as a parameter here. We had added the greet(), toggleOnSale(), and addCategory() methods to 'productSchema' above.

const p = new Product({name: "bike bag", price: 10});
p.greet();  // HELLLO!!! HI!! HOWDY!!!


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Tire Pump"});
    foundProduct.greet();  // greet() function works on 'found objects' too. (when we query).
    console.log(foundProduct);  // foundProduct's property of onSale is viewed as  onSale: false
    await foundProduct.toggleOnSale();  // we're trying the toggleOnSale() method, and we're printing it before and after (above line, and below line)
    await foundProduct.addCategory("Outdoors");
    console.log(foundProduct);  // onSale: true.  Category: ["Outdoors"]
}
findProduct();  // HELLLO!!! HI!! HOWDY!!!







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
