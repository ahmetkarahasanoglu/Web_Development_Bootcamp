const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Campground = require('./models/campground2_Den.js')

mongoose.connect('mongodb://127.0.0.1/yelp-camp_Deneme', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))




app.get('/', (req, res) => {
    res.render('home2_Den.ejs')
})

app.get('/campgrounds', async (req, res) => {           // LIST ALL 
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index2_Den.ejs', { campgrounds })
})

app.get('/campgrounds/new', (req, res) => {             // FORM TO CREATE NEW ONE
    res.render('campgrounds/new2_Den.ejs')              // '--> Order matters here (this block and below block). If we put this block under the below code, then there would be a confusion (in URLs): the computer would treat 'new' as an ID and would try to find that ID. Web page would show: "site can't be reached" (because app crashed)
})

app.post('/campgrounds', async (req, res) => {          // CREATE NEW ONE    
    const campground = new Campground(req.body.campground)
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
})

app.get('/campgrounds/:id', async (req, res) => {       // SHOW ONE
    const { id } = req.params
    const campground = await Campground.findById(id);
    res.render('campgrounds/show2_Den.ejs', { campground })
})

app.get('/campgrounds/:id/edit', async (req, res) => {  // FORM TO EDIT
    const { id } = req.params
    const campground = await Campground.findById(id);
    res.render('campgrounds/edit2_Den.ejs', { campground });
})

app.put('/campgrounds/:id', async (req, res) => {       // UPDATE ONE
    const { id } = req.params
    const campground = await Campground.findByIdAndUpdate(id, req.body, {runValidators: true, new:true})    
    res.redirect(`/campgrounds/${campground._id}`)
})

app.delete('/campgrounds/:id', async(req, res) => {     // DELETE ONE
    const { id } = req.params;
    const deleted = await Campground.findByIdAndDelete(id)
    // res.send(deleted);
    res.redirect('/campgrounds')
})



app.listen(3000, () => {
    console.log('Serving on port 3000')
})
