const addToCart = require("./cartModule");

let arr= [10,20,30,40,50];
arr.forEach((value, index)=>{
    console.log(value,index);    
});

console.log(addToCart());
