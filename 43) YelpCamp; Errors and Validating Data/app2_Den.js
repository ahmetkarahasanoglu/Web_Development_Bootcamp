const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const { campgroundSchema } = require('./schemas.js');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError')
const methodOverride = require('method-override');
const Campground = require('./models/campground');

mongoose.connect('mongodb://127.0.0.1/yelp-camp_Deneme', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const validateCampground = (req, res, next) => {  // this is a middleware    
    const { error } = campgroundSchema.validate(req.body);        
    if(error) {
        const msg = error.details.map(el => el.message).join(',')  // 'result.error.details' is an array. We 'map' over it and turn it into a string; joined them with comma.  |||  map() retrieves the 'message' string from each element and forms a new array.
        throw new ExpressError(msg, 400)
    } else {
        next();  // if there is no error, we call next middleware (continue)
    }    
}


app.get('/', (req, res) => {
    res.render('home2_Den.ejs')
});
app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index2_Den.ejs', { campgrounds })
}))
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new2_Den.ejs');
})

app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {
        // if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400)  // we won't need this line because we wrote the below codes here in this block.        
        const campground = new Campground(req.body.campground);
        await campground.save();
        res.redirect(`/campgrounds/${campground._id}`)    
}))

app.get('/campgrounds/:id', catchAsync(async (req, res,) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show2_Den.ejs', { campground });
}))

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit2_Den.ejs', { campground });
}))

app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
}))

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))

app.all('*', (req, res, next) => {  // order is very important. This will run if nothing else was matched first(↑)  |||  'app.all' means for every request, '*' means for every path.
    // res.send("404!!!!!!!-NOT FOUND")
    next(new ExpressError('Page Not Foundd', 404))  // ex: when entered url is:  http://localhost:3000/campgroundsasdf
})

app.use((err, req, res, next) => {  // when the above block [app.all('*')....] passes an ExpressError to this block with next(), the 'err' on this line will represent ExpressError.
    const { statusCode = 500 } = err;
    if(!err.message) err.message = "Oh no, something went wrong!"
    res.status(statusCode).render('error.ejs', { err });
})


app.listen(3000, () => {
    console.log('Serving on port 3000')
})
