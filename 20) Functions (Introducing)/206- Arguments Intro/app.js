function greet(firstName) {  // Here, "firstName" is a parameter. But when we execute the function (↓ way below), the thing inside the paranthesis is called "argument".
    console.log(`Hey there, ${firstName}`);
}

greet();  // If we don't enter an argument in the paranthesis when we execute the function, the function will use "undefined" as an argument.
