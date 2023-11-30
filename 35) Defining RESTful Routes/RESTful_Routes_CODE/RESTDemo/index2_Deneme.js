// 'CRUD' concept: Create, Read, Update, Delete.

// GET   -  /comments     - list all comments    -  [Index]
// POST  -  /comments     - Create a new comment -  [Post]
// GET   -  /comments/:id - Get one comment      -  [Show]
// PATCH -  /comments/:id - Update one comment   -  [Update]
// DELETE-  /comments/:id - Destroy one comment  -  [Destroy]

// GET   -  /comments/new - Form to create a new comment   -   [New]
// GET   -  /comments/:id/edit - Form to edit specific comment [Edit]


const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')  // Note: We're gonna use method-override because: With HTML Forms, we can only send GET or POST request (this is for the file 'edit2_Deneme.ejs). We can't send PATCH or DELETE request etc. We will handle it with method-override (it's an expressJs method).
const { v4: uuid } = require('uuid');  // 'uuid' is 'universal unique identifier'; it generates id number. Here, we're giving 'v4' a new name: 'uuid' . (the method is initially imported with the name 'v4')

app.use(express.urlencoded({ extended: true }));  //  this code will parse the request body as URL-encoded data.  |||  app.use(.....) runs when we make a request (any type of request: get, post etc.)
app.use(express.json())  // for json objects
app.use(methodOverride('_method'))  // Note: We're gonna use method-override because: With HTML Forms, we can only send GET or POST request (this is for the file 'edit2_Deneme.ejs). We can't send PATCH or DELETE request etc. We will handle it with method-override (it's an expressJs method).
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Our fake database:
let comments = [
    {        
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {        
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {        
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {        
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {                        // DISPLAY ALL COMMENTS.
    res.render('comments/index2_Deneme.ejs', { comments })  // This line (and above line) means: when '/comments' is entered on URL (in this case 'localhost:3000/comments'), do this: send the 'comments array' to 'index2_Deneme.ejs' (for it to process it), and show the 'index2_Deneme.ejs' on webpage.
})                                                          // '--> the meaning of the word 'index' is: the file that shows all comments (all things that we're dealing with).

app.get('/comments/new', (req, res) => {    // 'FORM' TO CREATE A NEW COMMENT.
    res.render('comments/new2_Deneme.ejs')  // '/new.ejs' is: the form to create a new comment.
})

app.post('/comments', (req, res) => {       // CREATE NEW COMMENT.
    // console.log(req.body)
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })    // (we're simulating 'creating new comment On The Server')
    // res.send("IT WORKED!");  // (on this page [a blank page with the text "IT WORKED!"], when we hit the refresh button, the form sends again the last inputs we entered. So we happened to be sending them twice; that is something we don't want. So, we won't use res.send(.....) here. On the below line, we will take care of it.)
    res.redirect('/comments');              // Takes us back to '/comments' (where we view all comments). In other words: When you make a new comment; so you made it, "Now I'm just gonna send you back to '/comments'"
})

app.get('/comments/:id', (req, res) => {    // SHOW DETAILS FOR ONE SPECIFIC COMMENT.
const { id } = req.params;
const comment = comments.find(c => c.id === id)  // Find in the comments array: refer each element as 'c'; bring me the element where c.id === id
res.render('comments/show2_Deneme.ejs', { comment })
})

app.get('/comments/:id/edit', (req, res) => {   // 'FORM' TO UPDATE A COMMENT
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit2_Deneme.ejs', { comment })  // Note: With HTML Forms (in edit2_Deneme.ejs), we can only send GET or POST request. We can't send PATCH or DELETE request etc.
})

app.patch('/comments/:id', (req, res) => {  // UPDATE A COMMENT
    const { id } = req.params;    // '--> Difference between PUT and PATCH: Put is 'replacing' a content as a whole; Patch is making partial modifications to a content     
    const newCommentText = req.body.comment;  // (the data is carried in the 'req.body' as a payload)    
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {  // DELETE A COMMENT
    const { id } = req.params
    comments = comments.filter(c => c.id !== id)  // this is a method that we preferred here - we're filtering all the elements except the one we want to delete, then we made a reassignment on the comments array: we assigned the filtered array to comments array. But normally in databases, we simply just remove an element from database.
    res.redirect('/comments')
})



app.get('/tacos', (req, res) => {  // (trying 'get' with a random path)
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => { // (trying post with a random path)
    console.log(req.body)  // { meat: 'chick', qty: '5' } (these are the values we entered on form (on the 'post' input) on the page). But previously, 'req.body' was viewed (on terminal) as "undefined" (which is its default value). By default, it is UNDEFINED, and is populated when you use body-parsing middleware such as 'express.json()' or 'express.urlencoded()'  [src: expressjs.com].  We added this line (around on top of this page) to view the 'req.body':   app.use(express.urlencoded({ extended: true }));  .  'req.body' contains key-value pairs of data submitted in the request body.
    // res.send("POST /tacos response") 
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})



app.listen(3000, () => {
    console.log("ON PORT 3000")
})
