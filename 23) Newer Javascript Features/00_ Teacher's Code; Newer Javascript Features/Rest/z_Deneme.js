const myNumbers = [10,20,30];

function sumUp(...nums) {
    return nums.reduce(function(total, el){  // Info: If we had used array function here, this would be:  return nums.reduce((total,el) => total + el)
        return (total + el);
    });
}

sumUp(...myNumbers);
console.log( sumUp(...myNumbers) );  // prints 60

// ----------------------------------------------------------------

// REST MEANS "AND THE REST OF PARAMETERS":
const yamahaRider = "Ahmet";
const hondaRider = "Mehmet";
otherPlayers = ["Selami", "Hasan", "Hüseyin", "Berk"];

const showRaceResults = function (goldWinner, silverWinner, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${goldWinner}`)
    console.log(`SILVER MEDAL GOES TO: ${silverWinner}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

showRaceResults(yamahaRider, hondaRider, ...otherPlayers);
