function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greet("Ahmet", "Karahasan");

// ----------------------------------------------------------------
function repeat(str, numberOfRepeat) {    
    for(let i=0; i<numberOfRepeat; i++) {
        console.log(str);        
    }
}
repeat("Good day", 4);

// Or, we can do the above, by using concatonation; like this:
function repeat2(str, numberOfRepeat) {
    let result = "";
    for (let i=0; i<numberOfRepeat; i++) {
        result += str;
    }
    console.log(result);
}
repeat2("Well done ", 3);