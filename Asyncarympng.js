async function asyncarympng(aray) {
    // Create an array of promises
    let prmsary = aray.map(element => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(element * 2)
            }, 500);
        })
    })
    return await Promise.all(prmsary)
}

(function main() {
    let a = [1, 2, 3, 4, 5, 67, 89, 6, 85, 2, 5, 2]
    asyncarympng(a).then(result => {
        console.log(result);
    }).catch(error => { console.error(error) }
    )
})()

/*
Explanation of Changes:
map instead of forEach:

map is used because it returns a new array of promises, while forEach doesn't.
Each element of the array is processed and a promise is returned for each element, which is collected into the prmsary.
Promise.all:

Promise.all is used to ensure that the function waits for all promises to resolve before returning the final result. It resolves with an array of results when all promises have been completed.
await in the async function:

Inside asyncarympng, we await the resolution of Promise.all to get the results once all promises have completed.
Handling results in main:

We handle the promise returned by asyncarympng using .then() to log the final results and .catch() to handle potential errors.
 */