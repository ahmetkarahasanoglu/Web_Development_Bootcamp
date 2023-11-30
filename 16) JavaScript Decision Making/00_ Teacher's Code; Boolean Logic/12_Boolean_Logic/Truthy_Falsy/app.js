const userInput = prompt("Enter something");

if (userInput) {  // In prompt window (↑), if user doesn't enter any character and presses OK button (or enter key), that is "sending an empty string" which is this --> "" . Empty string is inherently falsy.
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

if (0) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (NaN) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (undefined) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (' ') {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}