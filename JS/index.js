// for(var a=0;a<5;a++);
// console.log(a)

/**
 * Integer
 * String
 * Boolean
 * Null
 * Undefined
 

let a=5;
console.log(a,typeof a);
a="Abhishek";
console.log(a,typeof a);
a=true;
console.log(a,typeof a);
a=null;
console.log(a,typeof a);
a=undefined;
console.log(a,typeof a);
*/

/*
console.log(1+1+1+"1");
var a="1";
console.log(Number.parseInt(a)+Number.parseInt(a)+Number.parseInt(a));
*/

//WAP in JS to check if a number is Armstrong number 

/*
let num=153;
let sum=0;
let temp=num;
let n=num.toString().length;
while(temp>0){
    let r=temp%10;  
    sum+=Math.pow(r,n);
    temp=Math.floor(temp/10);
}
if(sum==num){
    console.log(num+" is an Armstrong number");
}else{
    console.log(num+" is not an Armstrong number");
}
*/
/*
let n=153,order=0,rem, sum=0;
let temp=n;
while(temp>0){
    order+=1;
    temp=Number.parseInt(temp/10);
}
temp=n;
while(temp>0){
    rem=temp%10;
    let res=1;
    for(let j=0;j<order;j++){
        res=res*rem;
    }
    sum=sum+res;
    temp=Number.parseInt(temp/10);
}
if(sum==n){
    console.log("Armstrong number");
}
else{
    console.log("Not an Armstrong number");
}
*/

function isArmstrong(n){
    let order=0,rem, sum=0;
let temp=n;
while(temp>0){
order+=1;
temp=Number.parseInt(temp/10);
}
temp=n;
while(temp>0){
rem=temp%10;
let res=1;
for(let j=0;j<order;j++){
    res=res*rem;
}
sum=sum+res;
temp=Number.parseInt(temp/10);
}
if(sum==n){
return true;
}
else{
return false;
}
}
function checkAndShow(){
    let val=document.getElementById("val").value;
    if(isArmstrong(val)){
        console.log("Armstrong number");
    }else{
        console.log("Not an Armstrong number");
    }
}