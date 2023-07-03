// Write a function which gets an array, adds an element and 
// returns an array with that element at the end

const numbers = [1, 2];
const append = (arr, el) => {
    return [...arr, el];
};

const newNumbers = append(numbers, 3);
console.log(numbers);
console.log(newNumbers);
