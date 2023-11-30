const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1/farmStand_Deneme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {      // List all products.  OR  list products from a specific category(this specific category is clicked-and-requested from show.ejs)
    const { category } = req.query
    if (category) {
        const products = await Product.find({ category: category })
        res.render('products/index2_Deneme.ejs', { products, category })
    } else {
        const products = await Product.find({}) 
        res.render('products/index2_Deneme.ejs', { products, category: 'All' })
    }    
})

// app.get('/category/:category', async (req, res) => {  // This is an alternative of the above code's 'category viewing' part. To view products of a specific category.
//     const { category } = req.params                   
//     let productsOfTheCategory;                        
//     await Product.find({category: category})
//     .then(data => {
//         console.log(data)
//         productsOfTheCategory = data;
//     })
//     .catch(e => {
//         console.log("Error: Couldn't do query for the products of the category")
//         console.log(e)
//     })
//     res.render('products/index3_forCatg_Den.ejs', { productsOfTheCategory, category })
// })

app.get('/products/new', (req, res) => {  // Form to create a new product.
    res.render('products/new2_Deneme.ejs', { categories })
})

app.post('/products', async (req, res) => {     // Create a new product.
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {  // Show one product.
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/show2_Deneme.ejs', { product })
})

app.get('/products/:id/edit', async (req, res) => {   // Form to edit specific product.
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit2_Deneme.ejs', { product, categories })
})

app.put('/products/:id', async (req, res) => {  // Update one product (whole)
    const { id } = req.params;    
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });    
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {  // Delete one product
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(8080, () => {
    console.log("APP IS LISTENING ON PORT 8080!")
})