const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function(e) {
    // console.log("Submitted!!!");  // we tried if the form submission works; it works but the page quickly goes to /shelter location. So, we see "Submited!!!" momentarily on browser's console.
    e.preventDefault(); // "don't do the normal thing you would do, browser! (don't submit the form)
                        // We do the preventDefault() because we don't want the page to go to the link of the submit action, in our case.
    // console.log(input.value); // input.value is the text that the user writes inside the 'input' on the page.
    const catName = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = catName;
    // console.log(newLI);
    list.append(newLI);
    input.value = ""; // we emptied the input (the text area). (after the submission).

});