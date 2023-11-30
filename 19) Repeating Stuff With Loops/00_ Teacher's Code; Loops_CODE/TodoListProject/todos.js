// "new": add a new to do.
// "list": list all to-do's (show)
// "delete": remove specific todo
// "quit": quit app

let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {  // The "index" variable on the above line (which is 'parsed to a Number' in that line); is checked on this line here, if it is a NaN (not a number) or not. Because if the user enters a string on the prompt input (which is assigned to the "index" variable), then the "index" becomes a NaN. So we're checking that, here on this line.
            let deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')  // <-- if the "index" is NaN, we print this.
        }
    }
    input = prompt('what would you like to do?');
}
console.log('OK QUIT THE APP!');