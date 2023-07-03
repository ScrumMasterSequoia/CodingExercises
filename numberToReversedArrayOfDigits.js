// Given a random non-negative number, you have to return the digits of 
//this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(number) {
//     const digits = number.toString();
//     return digits.split('').map(Number); 
// }
// console.log(digitize(12345)); 

// returns in same order above


function digitize(number) {
    const reverse = number.toString().split('').map(Number).reverse();
    return reverse;
}
console.log(digitize(5278590)); 