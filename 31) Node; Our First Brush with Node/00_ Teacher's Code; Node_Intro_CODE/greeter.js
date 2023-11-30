const args = process.argv.slice(2);  // take the 3rd element and so on as arguments (index 0 and so on) from the terminal command [ node greeter.js colt rusty tammy]
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

