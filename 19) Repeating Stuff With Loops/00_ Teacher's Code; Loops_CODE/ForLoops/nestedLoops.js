// ===================================
// NESTED FOR LOOP EXAMPLES
// ===================================

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`)
    }
}

// ===================================
// NESTED ARRAY ITERATION
// ===================================


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

// // My version of the above block is: (the difference is I didn't assign "seatingChart[i]" to a variable called "row"; but instead I used itself ( seatingChart[i] ).)
// for(let i=0; i<seatingChart.length; i++) {
//     console.log(`ROW #${i+1}`);
//     for(let j=0; j<seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j]);
//     }
// }