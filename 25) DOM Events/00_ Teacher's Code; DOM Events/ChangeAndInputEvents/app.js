const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {  // 'change' event triggers when we write sth in input line and then click somewhere outside of the input.
//     console.log(input.value);
// })

input.addEventListener('input', function (e) {  // 'input' event triggers when we type sth or delete sth on the input line (shift keys, arrow keys etc. are not considered as characters for this)
    h1.innerText = input.value;
});
