// Note: These tabs of codes have been organized a little bit (header, footer, nav have been extracted and collected) when applying 'Partials'. It's in 'Bootstrap_Demo' folder.

/* TERMINAL COMMANDS:
npm init              // creates package.json file
npm install express   // installs express package
npm install ejs       // installs ejs package. (ejs - embedded javaScript)
nodemon index.js      // runs index.js (with automatic restart feature for each change on index.js file)
mkdir views           // creates a folder called 'views'. This is for express to find our templates (views).
touch views/home.ejs  // creates a new file named 'home.ejs' in the folder 'views'.
*/

const express = require('express'); // uses the package 'express' in 'node_modules/express'
const app = express();
const path = require('path');  // This is for notifying the path of the working directory (which is the folder that contains this file in it) to system. Because otherwise, for example if we executed index.js from one upper level directory on terminal:  'nodemon Express_Templating_CODE/index.js' , then express wouldn't be ablo to reach the 'views' folder.
const redditData = require('./data.json');  // uses 'data.json' file that is in the same directory as this file.
// console.log(redditData);  // just to make sure that it works. (viewed on terminal)

app.use(express.static(path.join(__dirname, '/public')));  // this is about serving static assets. Static files are in '/public' folder.  |||  path.join(.....) method: We're joining 'public' to '__dirname' , so that 'public's location can be found by system, this is for the case if we would wanna run index.js from one level upper folder)

app.set('view engine', 'ejs');  // this is about using ejs. To use ejs, we don't need to 'require' ejs in this file. Instead, by setting 'view engine' to 'ejs' (on this line here) express behind the scenes will require the package 'ejs'.
                                // By default, when we create a new express app, and we're using 'view engine', express is going to assume
                                // that our views (our templates) exist in a directory (folder) called 'views'. So, we need to create that directory 'views'.

app.set('views', path.join(__dirname, '/views'));  // This is specifically for the case if we run 'index.js' from one level upper directory (on terminal), like this:  'nodemon z_Deneme_Templating/index.ejs' . In that case the system cannot reach 'home.ejs' file (our templates) that is under 'views' folder. To solve that problem we wrote this line here; We're joining the '__dirname' (current working directory) with '/views'.

app.get('/', (req, res) => {
    // res.send("Hi!");   // (will be viewed on webpage)
    res.render('home.ejs');  // Instead of sending a string as a response (like the above line), we will send a file (home.ejs). The render method renders a view (template) and sends the rendered HTML string to the client. Express assumes that this home.ejs file is in 'views' folder, so it knows where to find it.
                             // ejs provides that: the javascript code it sees at some points in 'home.ejs' will be evaluated and spit out as HTML.
})
app.get('/rand', (req, res) => {  // When user enters on address bar: localhost:3000/rand , show random.ejs file (↓) on webpage.
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { num });  // We're sending a variable to 'random.ejs' to use in its text. We could also write like this: { rand: num } --> This would say that we will use the name 'rand' for 'num' in random.ejs
})

app.get('/cats', (req, res) => {
    const cats = [ "Blue", "Rocket", "Monty", "Stephanie", "Winston"];
    res.render('cats.ejs', { cats });
})

// app.get('/r/:subreddit', (req, res) => {  // When user enters on address bar: localhost:3000/r/something
//     const { subreddit } = req.params;  // We're assigning the 'something' (↑) that user entered, to a variable named 'subreddit'.
//     res.render('subreddit.ejs', { subreddit }); 
// })

app.get ('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    // console.log(data);  // just to see that it works. (viewed on terminal)
    if(data) {
        res.render('subreddit.ejs', { ...data });  // when we spread the data like this; in subreddit.js we can write for example 'name' and easily reach the data.name (I think this is confusing, I would rather write 'data.name' in 'subreddit.ejs' each time I use it.)            
    } else {
        res.render('notfound', { subreddit });
    }
    
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})
