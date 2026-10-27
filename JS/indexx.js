/* var objArr=[];
function addObject(){
    let movie=document.getElementById("val1").value;
    let rating=document.getElementById("val2").value;
    let obj={
        name:movie,
        rating:rating
    }
    objArr.push(obj);
    console.log(objArr);
}
*/
/*
const sum=((a,b)=>a*b);
console.log(sum(10,11));

const armstrong=(num)=>{
    let sum=0;
    let temp=num;
    while(temp>0){
        let digit=temp%10;
        sum+=digit**3;
        temp=Math.floor(temp/10);
    }
    if(sum==num){
        console.log(num+" is an armstrong number");
    }else{
        console.log(num+" is not an armstrong number");
    }
}
*/
// setTimeout(function,delay); is used to execute a function after a specified delay in milliseconds. It takes two parameters: the function to be executed and the delay time in milliseconds.
/*
setTimeout(()=>{{
    console.log("Hello")
    }},3000);

let count=0;
setInterval(()=>{
    count++;
    console.log(count);
},1000);
*/

// console.log(Boolean(false));   
// console.log(Boolean(0));         
// console.log(Boolean(-0));       
// console.log(Boolean(0n));       
// console.log(Boolean(""));        
// console.log(Boolean(null));      
// console.log(Boolean(undefined)); 
// console.log(Boolean(NaN));       
/*
let arr=[1,2,3,4,5];
console.log(arr);
let nArr= arr.map((n)=>{return n*n;});
console.log(nArr);

nArr=arr.filter(n=>n>3);
console.log(nArr);

nArr=arr.find(n=>n>1);
console.log(nArr);

nArr=arr.reduce((sum,n)=>{sum+=n; return sum;},0);
console.log(nArr);
*/
//wap to convert a user entered number into binary and hexadecimal value.

/*let num=parseInt(prompt("Enter a number:"));
console.log("Binary: " + num.toString(2));
console.log("Hexadecimal: " + num.toString(16));
*/

let arr=[1,2,3,4,5];
console.log(arr);    // Output: [1, 2, 3, 4, 5]

arr.push(6);
console.log(arr);    // Output: [1, 2, 3, 4, 5, 6]
 
arr.unshift(0);
console.log(arr);    // Output: [0, 1, 2, 3, 4, 5, 6]

arr.pop();
console.log(arr);    // Output: [0, 1, 2, 3, 4, 5]

arr.shift();
console.log(arr);    // Output: [1, 2, 3, 4, 5]

console.log(arr.join(":"));    // Output: 1:2:3:4:5

arr.foo = "hello";
console.log(arr);    // Output: [1, 2, 3, 4, 5, foo: "hello"]

console.log(arr.indexOf(undefined));    // Output: -1

arr=[1, 2, 3, 4, 5, null];
console.log(arr.indexOf(null));    // Output: 5
