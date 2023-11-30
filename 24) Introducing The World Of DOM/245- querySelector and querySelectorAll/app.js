// there are: querySelector, and querySelectorAll. the second one returns plural (returns an html collection)

let paragr = document.querySelector("p"); // we selected only 1 paragraph, the first paragraph. And we selected by tag, which is "p" (paragraph)
console.log(paragr);

let paragraphs = document.querySelectorAll("p"); // we selected all paragraphs
console.log(paragraphs);



let tocTitle = document.querySelectorAll(".toctitle"); // we selected the ones that have toctitle class
console.log(tocTitle);



let banner = document.querySelector("#banner"); // we selected the one that has ID of "banner"
console.log(banner);


// ------------------------

let secondImage = document.querySelector("img:nth-of-type(2)"); // we selected the second image
console.log(secondImage);


let anchorThatHasTitleOfJava = document.querySelector("a[title='Java']"); // we're selecting by type and also attribute. "a" is type, and title is the attribute.
console.log(anchorThatHasTitleOfJava);

let anchorTagsNestedInsideOfParagraphs = document.querySelectorAll("p a");
console.log(anchorTagsNestedInsideOfParagraphs);