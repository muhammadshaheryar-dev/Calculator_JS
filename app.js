var result = document.getElementById("result").value
var res = document.getElementById("result").value;

function getnum(num) {
    console.log(result);
    document.getElementById("result").value += num;
}
function clearall() {
    document.getElementById("result").value = "";
}
function getresult() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}
function clear_0num() {
    var res = document.getElementById("result").value;
    // console.log(document.getElementById("result").value);
    // console.log(result)
    // document.getElementById("result").value = document.getElementById("result").value.slice(0, )
    document.getElementById("result").value = document.getElementById("result").value.slice(0, res.length - 1);
}