// Pass by Value

function change(b){
    b = 10;
}

var a = 1
change(a)
console.log(a)

// Pass by Reference

function changeObj(obj){
    obj.prop1 = function(){}
    obj.prop2 = {}
}

obj1 = {}
obj1.prop1 = {}
changeObj(obj1)
console.log(obj1)
