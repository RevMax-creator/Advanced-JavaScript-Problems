// str are immutable
function mrrimg(str) {
    let strary = Array.from(str);
    for (let index = strary.length - 1; index >= 0; index--) {
        strary.push(strary[index]);
    }
    return strary.toString().replaceAll(",","")
}

(function main() {
    let str = "Wizard"
    console.log(mrrimg(str))
})()