// In this page, we're trying to handle errors only with try-catch blocks and using next(). We're not using 'wrapAsync()' function yet, here.

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError = require('./AppError');


const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy'];

// function wrapAsync(fn) {
//     return function (req, res, next) {
//         fn(req, res, next).catch(e => next(e))
//     }
// }

app.get('/products', async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    // throw new AppError('NOT ALLOWED!', 401)
    res.render('products/new', { categories })
})

app.post('/products', async (req, res, next) => {     // Pay att: we added 'next' to the parameters.
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    } catch (e) {
        next(e);
    }    
})

app.get ('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)          // whether it's an error that comes out by itself,
        if (!product) {
            throw new AppError('Product Not Found', 404);   // or, whether it's an error that I threw myself; 
        }
        res.render('products/show', { product })
    } catch(e) {
        next(e)                                             // they're(↑) being caught here on the next() method.
    }
    
})

app.get('/products/:id/edit', async (req, res, next) => {    
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);        
    } catch(e) {
        next(e)
    }
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

// const handleValidationErr = err => {
//     console.dir(err);
//     //In a real app, we would do a lot more here...
//     return new AppError(`Validation Failed...${err.message}`, 400)
// }

// app.use((err, req, res, next) => {
//     console.log(err.name);
//     //We can single out particular types of Mongoose Errors:
//     if (err.name === 'ValidationError') err = handleValidationErr(err)
//     next(err);                      // structure is: If we pass any parameter to the next() method [in the paranthesis], it will perceive the parameter as an error, and pass it to the next error handling middleware (to below block).
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;    
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})
