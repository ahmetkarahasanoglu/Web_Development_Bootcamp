/* ClassList Practice

In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 
Please don't touch the markup in index.html! Do this all via JavaScript!    
Please use JavaScript and the classList property to invert the elements that have the highlight class. 
Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.   
Your end result should look like the image "Expected end result.png" in this folder. 

*** HINT: ***
Use document.querySelectorAll('li') to find all li elements on the page, and store its results to a variable.
Then, use a loop to loop over each found li element.
You can call the .classList.toggle() method on each li element, and pass "highlight" to it as an argument, 
so it automatically removes the "highlight" class if it's already present on the element, or it adds it if 
it's not present on the element.
You could also take the longer route: write if/else logic and use .classList.contains() to check if it each 
li element has the "highlight" class, and then use .classList.add() or .classList.remove() to add or remove 
the class accordingly.
*/

// WRITE YOUR CODE IN HERE:

const lis = document.querySelectorAll("li");

for (let li of lis) {
    li.classList.toggle("highlight");
}