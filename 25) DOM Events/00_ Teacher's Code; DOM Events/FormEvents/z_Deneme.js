const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

const username = document.querySelectorAll("input")[0];
const tweet = document.querySelectorAll("input")[1];

tweetForm.addEventListener("submit", function(e){
    e.preventDefault();   

    addToTweets(username.value, tweet.value);
    username.value = "";
    tweet.value = "";
});

const addToTweets = function(username, tweet) {
    const li = document.createElement("li");
    const bold = document.createElement("b");
    bold.append(username);
    li.append(bold);
    li.append(" - ");
    li.append(tweet);
    document.querySelector("ul").append(li);
    
}

console.log("deneme")