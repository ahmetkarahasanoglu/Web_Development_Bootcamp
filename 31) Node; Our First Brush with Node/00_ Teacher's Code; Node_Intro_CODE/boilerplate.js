// FILE SYSTEM MODULE ('fs')

const fs = require('fs');
const folderName = process.argv[2] || 'Project'             // In terminal, when we execute this javascript file, we will pass in a folder name that will be the folder to contain the files(index,app,styles). Like this:  node boilerplate.js MyProject .  In case we don't pass in a folder name, we set 'Project' as the default folder name (in this very line of code right here)

// fs.mkdir('Dogs', { recursive: true }, (err) => {         // This is asynchronous version. Which means, when we execute this javascript file (in the terminal), this asynchronous code block will stay 'pending' for a while, and other codes down below will run before this block.
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

// --------------------

try {
    fs.mkdirSync(folderName);                               // Creates a folder.  |||  This is synchronous version [ mkdirSync(....) ]  .  This synchronous version is easy to use.
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')            // these three lines create the three files for us (index.html, app.js, styles.css) . These 3 files are placed inside the folderName.
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}
