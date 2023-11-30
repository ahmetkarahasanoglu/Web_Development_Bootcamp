const input = document.querySelector("input");

// input.addEventListener("change", function(){    // change event
//     console.log(input.value);
// })


input.addEventListener("input", function() {
    console.log(input.value);
})