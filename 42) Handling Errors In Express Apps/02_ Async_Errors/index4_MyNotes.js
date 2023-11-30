// We're using 'wrapAsync()' function, instead of try-catch blocks; to catch error.
// (wrapAsync function is a function that we describe by ourselves)

// We're also learning "Differentiating the Mongoose Errors" towards the end of this file.

// Info: In Express 5 (new version), it is said that express will catch also async function's errors automatically.
// -------------------------------------------------------------------------

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

function wrapAsync(fn) {                // wrapAsync - function description. wrapAsync function returns a function which calls the function that we passed-in (which is an async function). It returns a promise so we can call catch() on this function.
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.get('/products', wrapAsync(async (req, res, next) => {  // 'wrapAsync' function is used to handle the errors of the functions that take time ('await' functions). We wrapped all the code block with wrapAsync() method, to catch any possible mistakes. It's shorter than writing try-catch blocks in every code block. / We're using wrapAsync() on async functions. For normal functions (non-async), Express handles them itself; no 'wrapAsync' function required for those.
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
}))

app.get('/products/new', (req, res) => {            // we didn't use 'wrapAsync' function here. Because this is a normal (non-async) function and no need for 'wrapAsync'. Because Express handles errors by itself for normal (non-async) functions.
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

app.get ('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    if (!product) {
        // throw new AppError('Product Not Found', 404);   // Note From ExpressJs Docs: For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function [↓], where Express will catch and process them.
        return next(new AppError('Product Not Found', 404)); // we used 'return' to make sure that the below line of code doesn't run. We could have done this also with an else-if block on the below line of code.
    }
    res.render('products/show', { product })
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/edit', { product, categories })
}))

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
    } catch(e) {
        next(e)
    }
})

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}));



const handleCastErr = err => {    
    // we can write function description content here.
}

const handleValidationErr = err => {                                // DIFFERENTIATING THE MONGOOSE ERRORS
    console.dir(err);
    //In a real app, we would do a lot more here...
    return new AppError(`Validation Failed...${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    //We can single out particular types of Mongoose Errors:        // DIFFERENTIATING THE MONGOOSE ERRORS
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    if (err.name === 'CastError') err = handleCastErr(err)
    next(err);                      // structure is: If we pass any parameter to the next() method [in the paranthesis], it will perceive the parameter as an error, and pass it to the next error handling middleware (to below block).
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;    
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})
