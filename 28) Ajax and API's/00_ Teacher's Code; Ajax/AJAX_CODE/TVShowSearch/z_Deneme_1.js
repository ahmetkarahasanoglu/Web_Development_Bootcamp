const form = document.querySelector("#searchForm");
const div = document.querySelector("div");

async function getMovies() {
    try {
        const searchTerm = form.elements.query.value;
        const config = { params: { q: searchTerm } }
        const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
        console.log(response);
        console.log(typeof response);
        return response.data;
    } catch(e) {
        return "FAILED TO GET MOVIES";
    }
}

async function showImages() {
    const movies = await getMovies();
    for (let currentMovie of movies) {
        if (currentMovie.show.image) {
            const newImg = document.createElement("img");
            newImg.src = currentMovie.show.image.medium;
            div.append(newImg);
        }
        
    }
}

function clearImages() {
    div.innerText = "";
}

form.addEventListener("submit", async function(e){
    e.preventDefault();
    clearImages();    
    await showImages();
    form.elements.query.value = "";
});
