const express = require('express');
const app = express();
const morgan = require('morgan');


// app.use(() => {             // this always runs when there is a request.
//     console.log("HEYYY!")
// })

app.use(morgan('tiny'));       // this always runs when there is a request.  |||  prints: GET /dogs 304 - - 9.782 ms

app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE!!!")
    return next();  // People tend to use 'return' here, because 'next()' is generally used at the end of the code block (function description), and we won't want any below line to run
    console.log("AFTER CALLING NEXT - IN MY FIRST MIDDLEWARE")
})
app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE!!!")
    return next();
})
app.use((req, res, next) => {
    console.log("THIS IS MY THIRD MIDDLEWARE!!!")
    return next();
})



app.get('/', (req, res) => {
    res.send("HOME PAGE!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF WOOF!")
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})