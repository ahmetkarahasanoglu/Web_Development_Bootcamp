let num = 0;
while(num<10) {
    console.log(num); // 0 1 2 3 ... 9 (one below another)
    num++;
}

const SECRET = "BabyHippo";
let guess = prompt("enter the secret code:");
while(guess !== SECRET) {
    guess = prompt("enter the secret code:");
}
console.log("Congrats, you got the secret!");
