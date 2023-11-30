// THE BEST AND USEFUL WAY TO ADD EVENTS IS, USING  addEventListener; WHICH IS ON THE BOTTOM OF THIS PAGE.

/*  1) The first way to add an event listener is writing on HTML; like this (Inline events) (not useful):
       <button onclick = "alert('you clicked me!')"> Hey, click me! </button>  //  to be written on HTML file (which is called "Inline events"). But, this is not a useful way.
*/

const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}


const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;  // This way, we can't assign two functions to 'onclick' at the same time. Only shout is
                               // assigned, because it overwrites the above twist. That's why using addEventListener is
                               // better and more useful; as shown below.

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
