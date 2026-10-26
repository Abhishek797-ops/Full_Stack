let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

//Shopping Cart Total

let prices = [100, 200, 150, 50, 300];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total =", total);

//Book Inventory

