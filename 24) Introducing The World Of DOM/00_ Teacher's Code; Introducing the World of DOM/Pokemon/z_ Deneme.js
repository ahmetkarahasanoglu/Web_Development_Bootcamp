// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// base Url (is above link but without the number at the end):  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/

const container = document.querySelector('#container');
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i = 1; i <= 151; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");

    const label = document.createElement("span");
    label.innerText = `#${i}`;    
    
    const newImg = document.createElement("img");
    newImg.src = `${baseURL}${i}.png`; 
    
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}