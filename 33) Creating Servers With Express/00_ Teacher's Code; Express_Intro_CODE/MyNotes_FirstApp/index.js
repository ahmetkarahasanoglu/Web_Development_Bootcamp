const express = require("express");
const app = express();
// console.dir(app);

// app.use(() => {
//     console.log("WE GOT A NEW REQUEST!");  // now, when we open chrome and write "localhost:3000", a text ("We Got A New Request") will show up on terminal.
// })

// app.use((req, res) => {  // Normally, an HTTP Request is a text. Express parses this text and creates a Javascript object.
    // console.log("WE GOT A NEW REQUEST!!");  // (viewed on terminal)
    // console.dir(req);  // This is a long javascript object that Express created. Viewed on terminal (in this case).
    // res.send("HELLO, WE GOT YOUR REQUEST. THIS IS A RESPONSE!");  // This text is shown on the webpage right after we enter localhost:3000 on Chrome's address bar.
    // res.send("<h1>This is an H1</h1>");
// })

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

// app.get('/r/:subreddit', (req, res) => {  // ':subreddit' is a variable here
//     res.send("THIS IS A SUBREDDIT");
// })

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing PostId: ${postId} on the subreddit: ${subreddit} </h1>`);
})

// app.get('/search', (req, res) => {
//     console.log(req.query);
//     req.send('HI!');
// })

app.get('/search', (req, res) => {
    const { q, color } = req.query;
    // console.log(req.query);  // just to see what the req.query object is, on terminal. It is: { q: 'cars', color: 'red' }
    res.send(`<h1>Search result for: ${q} and ${color}</h1>`);  // when we write on webpage address bar: 'http://localhost:3000/search?q=cars'  [ --> pay att to: '?q=cars'] , this will show up in webpage:  'Search result for: cars and red'
})

app.listen(3000, () => {                // This only served locally on our computer.
    console.log("LISTENING ON PORT 3000!");  // when we open chrome, and write on address bar "localhost:3000", it will show "Cannot GET /"  (there is a server there, but we couldn't get a response, means the server is listening). But if we had written another port number on the website address bar, ex: localhost:6789, it would show "cannot reach this site" (it means there is nothing there)
})                                           // we can use different port number "8080", instead of "3000". Important: But, we have to use different ports for different processes, in order to make seperate traffic.
