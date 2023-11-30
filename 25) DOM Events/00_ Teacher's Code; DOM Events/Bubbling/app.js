/*   *** stopPropogation() method   (to prevent Event Bubbling [upwards event bubbling] ***

      In this lesson, we learned this: when there are elements within elements (ex: a paragraph (p) inside a section, and a button inside 
    that paragraph etc); and if all these elements have an eventListener (ex: click eventListener); and when we click the most inner 
    element to trigger its eventListener and if we don't want the outer elements' eventListeners to be triggered, we use stopPropogation() 
    method. We use it inside the addEventListener (generally as e.stopPropogation() ).
        In the html file (index.html) we used inline javascript codes (this is not a useful way) to set the environment for this.
*/

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

// for the 'changeColor' button, we will use stopPropogation() method:
button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();                             // stopPropogation() method. If we didn't use this method, when we click 'change color' button, that whole div would have 
})                                                      // hidden (disappear), but instead we want to change color, and we want the div to stay there (, not disappear). So, we use stopPropogation() method.
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})



const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}