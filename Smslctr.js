function sumslctr(ary) {
    sum = 0
    for (const element of ary) {
        if (element > 0) {
            sum += element
        }
        else { break }
    }
    return sum
}

(function main() {
    ary = [1, 8, 2, -1, 4, 5, 6, 78, 9, -1, 2, 58, 0, 6, 8, 3]
    console.log(sumslctr(ary))
})()