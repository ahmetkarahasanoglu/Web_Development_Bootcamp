const button = document.querySelector("button");
const jokes = document.querySelector("#jokes");

addNewJoke = async function() {
  const newLI = document.createElement("li");
  newLI.innerText = await getDadJoke();
  jokes.append(newLI);
}

const getDadJoke = async function () {
  try {
    const config = {headers: { Accept: "application/json"} };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch(e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }  
}

button.addEventListener("click", addNewJoke);