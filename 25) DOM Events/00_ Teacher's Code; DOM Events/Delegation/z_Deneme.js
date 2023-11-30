const formOfInputs = document.querySelector("form");
const containerOfTweets = document.querySelector("#tweets");

formOfInputs.addEventListener("submit", function(e){
    e.preventDefault();
    const username = formOfInputs.elements.username;
    const tweet = formOfInputs.elements.tweet;
    addToTweets(username.value, tweet.value);
    username.value = "";
    tweet.value = "";
})

function addToTweets(username, tweet) {
    const newLI = document.createElement("li");
    const bold = document.createElement("b");
    bold.append(username);
    newLI.append(bold);
    newLI.append(` - ${tweet}`);
    containerOfTweets.append(newLI);
}

containerOfTweets.addEventListener("click", function(e){
    if (e.target.nodeName === "LI") {
        e.target.remove();
    }
    if(e.target.nodeName === "B") {
        e.target.parentElement.remove();  // Since 'b' is nested in 'li', we used 'parentElement.remove()' to delete the 'li'
    }
})
