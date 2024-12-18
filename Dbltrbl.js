function dbltrbl(ary) {
    let seen = new Set()
    for (let index = 0; index < ary.length; index++) {
        const element = ary[index];
        // Double the element if it hasn't been seen before
        if (!seen.has(element)) {
            ary[index] = element * 2;
            seen.add(element);  // Mark this element as doubled
        }
    }
    return ary;
}

const main = () => {
    let aary = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(dbltrbl(aary));
}

main()