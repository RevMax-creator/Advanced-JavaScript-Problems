function calculateTotal(ary) {
    cost = 0
    for (const element of ary) {
        cost += element.price * element.quantity
    }
    return cost
}

(function main() {
    const products = [
        { name: "Laptop", price: 999.99, quantity: 10 },
        { name: "Smartphone", price: 599.99, quantity: 25 },
        { name: "Headphones", price: 150.00, quantity: 50 },
        { name: "Monitor", price: 300.00, quantity: 15 },
        { name: "Keyboard", price: 50.00, quantity: 100 }
    ];
    console.log(calculateTotal(products))
})()