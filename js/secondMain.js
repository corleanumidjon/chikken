let c = 0;
function productcountFunUp() {
    // document.getElementById("productcount").innerHTML(let);
    c = c + 1;
    document.getElementById("productcount").innerHTML = c;
}

function productcountFunDown() {
    // document.getElementById("productcount").innerHTML(let);
    // or
    if (c > 0){
        c = c - 1;
        document.getElementById("productcount").innerHTML = c;
    }
}
