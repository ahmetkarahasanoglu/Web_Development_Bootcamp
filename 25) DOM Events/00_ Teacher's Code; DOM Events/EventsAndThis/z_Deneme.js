const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

for (let button of buttons) {
    button.addEventListener("click", colorize)
}

for (let h1 of h1s) {
    h1.addEventListener("click", colorize)
}

const makeRandomColor = function() {  
    const r = Math.floor(Math.random() * 256);  // 0 ile 255 arasında (0 ve 255 dahil) bir sayı
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`    
}

function colorize(){  // ?? the way we write the function description is different than the above function (line 12) ??
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();       
}