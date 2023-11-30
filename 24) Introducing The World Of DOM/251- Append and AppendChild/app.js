const newImg = document.createElement("img");
console.dir(newImg); // we see that this is an object, and it has all the attributes of an object.
newImg.src = "https://upload.wikimedia.org/wikipedia/commons/2/25/Three-wide_multiple_row_back.JPG";

// appendChild():     (inserts something as the last child of the chosen element):
document.body.appendChild(newImg);
newImg.classList.add("carClass");
const newH3 = document.createElement("h3");
newH3.innerText = "I am new!";
document.body.appendChild(newH3);

// append():                                                          // append ile, girdiğimiz parametreyi(leri), bir html elementinin 
const firstParagraph = document.querySelector("p");                   // içine (burda firstParagraph'ın içine), o elementin son kısmına eklemiş oluruz. append'de
firstParagraph.append("I am new text yaaayy!", "asdfasdfasfasdasdf"); // birden fazla parametre girebiliyoruz, appendChild'da 1 parametre girilebiliyordu (yukarda). 
                                                                      // append'de String de girebiliyoruz. Burda iki tane String girdik parametre olarak.
                                                                      
                                                                      

// prepend():     (inserts something as the first child of the chosen element):
const newBold = document.createElement("b");
newBold.innerText = "New Bold Text"; // burda innerText ile eklemek yerine append de kullanabiliriz: newBold.append("asdf")
firstParagraph.prepend(newBold);

// insertAdjacentElement():
const h2 = document.createElement("h2");
h2.append("Are adorable chickens"); // innerText ile de ekleyebilirdik yazıyı.
document.querySelector("h1").insertAdjacentElement("afterend", h2);       // There are 2 parameters. The first is position, the second is the element to be 
                                                                          // added. Position can be 4 different values: "beforebegin, afterbegin, beforeend, afterend". We
                                                                          // generally use "beforebegin" and "afterend".

// nextElementSibling :                                                                          
console.log( document.querySelector("h1").nextElementSibling ); // output is:  <h2>Are adorable chickens</h2>

// after():
const h3 = document.createElement("h3");
h3.innerText = "I am h3"; // append de kullanabilirdik innerText yerine.
document.querySelector("h1").after(h3);  // after() method : adds sth just after the element. - it inserts something in the children list of the Element's parent, just after the Element. 