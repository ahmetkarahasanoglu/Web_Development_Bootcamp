const password = prompt("Enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Your password is valid; it doesn't contain any space character");
    } else {
        console.log("Invalid password; your password contains space character");
    }
} else {
    console.log("Your password is too short! It must have 6 characters or more");
}