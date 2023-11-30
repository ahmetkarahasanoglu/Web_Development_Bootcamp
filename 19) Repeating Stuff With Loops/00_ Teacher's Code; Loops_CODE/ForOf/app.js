// FOR...OF  IS USED IN ARRAYS, STRINGS... . BUT NOT FOR OBJECTS. (for objects we will be using "for...in" --> under the folder of "Iterating Objects")
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}



// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// // THIS WAS THE WAY WE PREVIOUSLY BEEN USING:
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// // A DIFFERENT VERSION (FORM) OF THE ABOVE BLOCK IS:
// for (let i = 0; i < seatingChart.length; i++) {
//     for(let j = 0; j<seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j])
//     }
// }


// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char)
// }

