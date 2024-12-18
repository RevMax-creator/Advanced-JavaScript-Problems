const rndmdly = (maxtime) => {
    let dly = 0 + Math.random() * maxtime
    return Math.ceil(dly * 1000)
}

async function brewCoffee(type) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Your ${type} has been brewed.\nEnjoy your coffee!`);
        }, rndmdly(35));
    });
}

(function main() {
    brewCoffee("Espresso").then(result => {
        console.log(result);
    }).catch(err => {
        console.error(err)
    })
})();