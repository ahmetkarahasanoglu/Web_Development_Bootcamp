const express = require('express');
const app = express();
const morgan = require('morgan');


// app.use(() => {              // this always runs when there is a request.
//     console.log("HEYYY!")
// })

app.use(morgan('tiny'));        // this always runs when there is a request.  |||  prints: GET /dogs 304 - - 9.782 ms


app.use((req, res, next) => {   // this always runs when there is a request.
    req.requestTime = Date.now();
    console.log(req.method, req.path, req.requestTime);  // prints: GET '/dogs' or '/' (whatever the path is), and requestTime
    next();
})

app.use('/dogs', (req, res, next) => {  // for all the requests on the path '/dogs', this runs. (pay att: '.use' [app.use])
    console.log("I LOVE DOGS!!")
    next();
})

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("HOME PAGE!")
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("WOOF WOOF!")
})

// app.use((req, res) => {              // If nothing was found (in terms of the entered path), this will run. (pay att: '.use' [app.use])
//     res.send('NOT FOUND!')
// })

app.use((req, res) => {                 // If nothing was found (in terms of the entered path) and status is 404, this will run. (pay att: '.use' [app.use])
    res.status(404).send('NOT FOUND!')
})



app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})
