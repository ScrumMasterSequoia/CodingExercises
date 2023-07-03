// write a function that removes all duplicate elements in an array

// set solution
const array1 = [1,2,2,3,4,5,5,5,6];

// const set = (array) => {
//     return [...new Set(array)];
// };
// const newArray = set(array1);
// console.log(newArray);


// foreach loop with .includes solution

const uniqueArr = (arr) => {
    const result = [];
    arr.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
};
const answer = uniqueArr(array1);
console.log(answer);