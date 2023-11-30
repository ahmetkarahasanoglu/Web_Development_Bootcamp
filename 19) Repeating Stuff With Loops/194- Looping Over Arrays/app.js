const animals = ["lions", "tigers", "bears"];

// To loop over an array, start at index 0 and continue looping until the last index which is (length-1)
for (let i=0; i<animals.length; i++) {
    console.log(i, animals[i]); // 0 "lions"   (output)
}                               // 1 "tigers"
                                // 2 "bears"

// Or, we can start from the end of the array for listing it:
for(let i=animals.length-1; i>=0; i--) {
    console.log(i, animals[i]); //  2 "bears"  (output)
}                               //  1 "tiger"
                                //  0 "lions"