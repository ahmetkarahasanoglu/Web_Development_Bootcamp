fetch("https://swapi.dev/api/people/1/")  // this "fetch" will return a promise: resolved or rejected.
  .then((res) => {                        // "res" represents response.
    console.log("RESOLVED!", res);
    return res.json(); // (converts from 'readable stream' to json format) (res.json also returns a promise). ******Read the explanation below, for this line********************
  })
  .then((data) => {    // "then" means "after that" (ardından). "data" is what "res.json()" returns. (it's in json format)
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

/*
********Explanation:*********** : 
Remember we talked briefly about headers and then there's this body unfortunately and this is probably
the most confusing part about fetch.
This response body doesn't include all the stuff we might expect it to.
The reason for that is that this promise is resolved as soon as fetch receives any headers.
So that means it may not have the full body, all the different, all the data, all the text, in our
case, all the JSON back from the HTTP request that was made before this is resolved.
And that's what we see here.
It's this readable stream (body is in the form of readable stream), so we actually need to read it and parse it.
It's pretty straightforward though. There's a method on response called '.JSON', so this is not the same as 'JSON.parse'.
This is a method that is added on to this fetch response object.
It's super easy to use, but the thing about 'res.JSON()' is that it also returns a promise.
So we either add on our '.then' we could start by just doing it right here and just take a look at what we get back [line 4].
Let's just call it data [.then(data)] and console.log(JSON DONE!, data) [line 4].
I'm going to refactor this in a moment, but we'll just do it on a single line here [line 4].
Let's see what we get back now.
So the promise was resolved originally.
That means we got something back, but then we had to call JSON, which could take some time.
There might be an error parsing the JSON so the promise is not guaranteed to be resolved, but it usually
is if you get to this point. So we call our '.then' and there we add in our little console.log just to print out the data we got back
and there is our data. We can see all the stuff on Luke Skywalker.
So let's refactor this slightly. We can do it all on a single line like this.
But I think it would be a little bit nicer just to return this as we've seen before, and then just
add on another '.then' keep it nice and flat, console.log, whatever data we got back.
All right, so let's see.
Same end result.
We're still getting the parsed data.
*/


fetch("https://swapi.dev/api/people/1/")  // ***
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();  // res.json also returns a promise.
  })
  .then((data) => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/2/");  // *** I could make these requests (people/1 and people/2) independently, which would be probably a better way of doing it because they don't depend on one another. But sometimes you might have a request that you need to make first  before you can make a second one.
  })
  .then((res) => {
    console.log("SECOND REQUEST RESOLVED!!!");
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();