function filterProducts(prdct, critria) {
    let filtered = []
    for (const element of prdct) {
        for (const key in element) {
            const critervalue = element[key];
            if (critervalue === critria) {
                filtered.push(element)
            }
        }
    }
    return filtered
}


(function main() {
    let prdct = [{ 'Toothpaste': 'Home' }, { 'Brush': 'Home' }, { 'Pen': 'Stationary' }, { 'Charger': 'Electronics' }, { 'Facewash': 'Beauty' }]
    let criterion = "Home"
    console.log(filterProducts(prdct, criterion));
})()