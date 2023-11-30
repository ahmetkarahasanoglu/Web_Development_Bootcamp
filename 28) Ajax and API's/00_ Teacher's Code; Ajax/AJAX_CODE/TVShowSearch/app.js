const form = document.querySelector('#searchForm');
const myDiv = document.querySelector("div");

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }  // in this curly brackets, developer can use params, or headers [whatever will be used as config] / Config is a variable, 'config' can be sth else.
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    clearImages(); // to remove previous images. (when form is submitted second time, third time etc.)
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;            
            myDiv.append(img);
        }
    }
}

const clearImages = () => {
    myDiv.innerText = "";
}