const fakeRequest = (url) => {  // FUNCTION DESCRIPTION
    return new Promise((resolve, reject) => {
        const rand = Math.random();  // By using this random() method, we will simulate success and failure cases [resolve and reject cases].
        setTimeout(() => {
            if (rand < 0.5) {  // We're simulating success and failure cases [resolve and reject cases].
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')          // FUNCTION EXECUTION
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


const delayedColorChange = (color, delay) => {   // FUNCTION DESCRIPTION
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)                                  // there is no reject (failure) case here, so we didn't use .catch()
    })
}


delayedColorChange('red', 1000)                 // FUNCTION EXECUTION
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000)) // "then" means "after that" (ardından).
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
                                                    // there is no reject (failure) case here, so we didn't use .catch()