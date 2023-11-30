/* Event Delegation
    [We're delegating the parent element (we give authorization to it to do action).]

    When we want to delete an 'li' that is already on the page when the page was first reloaded, the delete (remove) process works.
    But when we add other 'li's after the page reload (by clicking "Post Tweet" button in this example), the delete (remove) process
    doesn't work for these new 'li's. So, solution is: event delegation; we need to add our eventListener 
    to parent element (to 'ul' element for here).
*/


const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();  // this is another way of saying "if e.target.nodeName equals to LI, remove the e.target"
                                                      // it's another way of stating the if statement
})                                                    // z_Deneme.js'de 'b' (bold) elementine tıklandığında onun parent elementi olan 'li'nin silinmesi için de kod yazdım.

