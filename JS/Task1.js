const input =document.getElementById("val");
function tempConvert(){
    const celcius=Number(input.value);
    const fahrenheit=(celcius*9/5)+32;
    console.log(fahrenheit);
}