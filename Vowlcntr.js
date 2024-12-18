function vwlcntr(str) {
    cntr = 0
    let vowels = new Set(["a", "e", "i", "o", "u"])
    for (const element of str.toLowerCase()) {
        if (vowels.has(element)) {
            cntr += 1
        }
    }
    return cntr
}

(function main() {
    let str = "ThisavoweltestEr"
    console.log(vwlcntr(str));
})()