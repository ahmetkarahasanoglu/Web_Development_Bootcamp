
// try {
//     hello.toUpperCase();
// } catch {             // if we don't write a catch block, the above line will cause an error, and the lines after this point will not work.
//     console.log("ERROR!!!!");
// }

// console.log("AFTER!");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}