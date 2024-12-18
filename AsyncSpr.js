const rndmdly = (maxtime) => {
    let dly = 0 + Math.random() * maxtime
    return Math.ceil(dly * 1000)
}

async function placeOrder() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your order has been confirmed")
        }, rndmdly(10));
    })
}

(function main() {
    placeOrder().then(result => {
        console.log(result);
    }).catch(err => {
        console.error(err);
    })
})()