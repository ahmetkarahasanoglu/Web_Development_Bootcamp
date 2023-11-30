const form = document.querySelector("#shelterForm");
form.addEventListener("submit", function(e) {
    // console.log("Submitted!!!");  // we tried if the form submission works; it works but the page quickly goes to /shelter location. So, we see "Submited!!!" momentarily on browser's console.
    e.preventDefault(); // "don't do the normal thing you would do, browser! (don't submit the form)
                        // We do the preventDefault() because we don't want the page to go to the link of the submit action, in our case.
});