// THIS CODE (PAGE) THAT I WROTE HAS LOTS OF FLAWS. THE DECENT CODE IS IN "TEACHER'S CODE" FOLDER.

// "new": add a new to do.
// "list": list all to-do's (show)
// "delete": remove specific todo
// "quit": quit app

let toDoArray = [];
let i = 0;
while(i<5) {    
    let input = prompt("What action do you want to do:  new / list / delete / quit?");
    if(input === "quit") { // QUIT
        break;
    }
    if (input === "new") {  //  NEW (ADD NEW ITEM) ##############
    let newItemInput = prompt("Enter the new to-do");
    toDoArray.push(newItemInput);
    console.log(`${newItemInput} added to do list.`);
    }
    if (input === "list") {  // LIST (SHOW) #####################
        console.log("*******************");
        for (let i=0; i<toDoArray.length; i++) {
            console.log(`${i}: ${toDoArray[i]}`);
        }                
        console.log("*******************");
    }
    if (input === "delete") { // DELETE ITEM #####################
        // let indexToBeDeleted = parseInt(prompt("Enter the index of the to-do you want to delete."));
        // console.log(`${indexToBeDeleted}: ${toDoArray[indexToBeDeleted]} - is being deleted.`);
        // toDoArray.splice(`${indexToBeDeleted}, 1`);        
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = toDoArray.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    //break;
    i++;
}