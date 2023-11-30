document.body.style.backgroundColor = "red";

setTimeout(() => {                              // with Arrow function
    document.body.style.backgroundColor = "yellow";
}, 1000);

setTimeout(() => {
    document.body.style.backgroundColor = "blue";
}, 2000);

setTimeout(() => {
    document.body.style.backgroundColor = "orange";
}, 3000);

setTimeout(() => {
    document.body.style.backgroundColor = "purple";
}, 4000);




setTimeout(function() {                        // with basic function 
    document.body.style.backgroundColor = "cyan";
}, 5000);