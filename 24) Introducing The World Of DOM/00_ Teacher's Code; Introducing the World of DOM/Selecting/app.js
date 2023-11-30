const allImages = document.getElementsByTagName('img');
                                        // also, there is 'getElementById' which selects by ID.
for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');  // We're selecting anchor tags nested inside of paragraphs
                    // also, there is 'querySelector' which selects only one element, but querySelectorAll selects multiple elements.
for (let link of links) {
    console.log(link.href)
}




// Let's try to learn h1's fontsize:
const h1 = document.querySelector("h1");
h1.style.fontSize  // returns us empty string (""). However we can find out this information by using window object:

window.getComputedStyle(h1);  // returns us a long big object.
window.getComputedStyle(h1).fontSize;  // returns us the fontsize.