function mgiclsrtnght(arr, huses) {
    for (const stdnt of arr) {
        if (stdnt.length < 6) {
            huses.push({ "Gryffindor": stdnt })
        }
        else if (stdnt.length < 8) {
            huses.push({ "Hufflepuff": stdnt })
        }
        else if (stdnt.length < 12) {
            huses.push({ "Ravenclaw": stdnt })
        }
        else if (stdnt.length >= 12) {
            huses.push({ "Slytherin": stdnt })
        }
    }
}
function main() {
    let sname = ["Raju", "Himanshu", "Gourav", "Arpita"]
    let houses = []
    mgiclsrtnght(sname, houses)
    console.log(houses);
}
main()