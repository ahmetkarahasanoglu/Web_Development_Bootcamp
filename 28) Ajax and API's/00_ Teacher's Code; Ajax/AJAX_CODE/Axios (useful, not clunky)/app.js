// Axios: a third party, a seperate library that is made for http requests. Makes it easy. Behind the scenes it uses "fetch".

axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESPONSE: ", res);
  })
  .catch((e) => {
    console.log("ERROR! ", e);
  });

const getStarWarsPerson = async (id) => {
  try {    
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);    
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
