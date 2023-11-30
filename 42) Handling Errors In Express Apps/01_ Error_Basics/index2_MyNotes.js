const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    // res.send("PASSWORD NEEDED(2)!")
    throw new AppError('password required(1)', 401);
    // throw new AppError('Password required(4)!', 400)
    // throw new Error('password required(3)', 401);     
}

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

app.get('/error', (req, res) => {
    chicken.fly()                       // We made a deliberate error: 'chicken' is not defined here. We will handle this error at 
})                                      // '-> the end of the page by the code line: app.use(err, req, res,next)

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})


app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})


// app.use((err, req, res, next) => {
//     console.log("******************************************")
//     console.log("*****************ERROR*****************")
//     console.log("******************************************")
//     console.log(err)
//     next(err)                            // this means: it's calling next middleware and passing 'err' as parameter.  |||  If we don't call 'next' with a parameter (err), we won't hit the built-in error handler.
// })

app.use((err, req, res, next) => {          // Our custom error handling. We should put this block (err, req, res, next) at the end of our code page, like this in here.    
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message)
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})
