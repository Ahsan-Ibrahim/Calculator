var a = document.getElementById('input')
function show(ab){
     a.value += ab
}

function result(){
    var b = eval(a.value)
    a.value = b
}
function clr(){
    a.value =''
}
function sqr(){
    var squar = a.value * a.value;
    a.value = squar
}

function zakat(){
    var zkt = a.value*0.025
    a.value = zkt;
}

function del(){
    var newvalue = a.value.slice(0,a.value.length-1)
    a.value = newvalue
}