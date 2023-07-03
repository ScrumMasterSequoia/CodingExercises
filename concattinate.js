// write a function which will concatonate two arrays

const nums = [1,2];
const moreNums = [3,4];

const concatonate = (a, b) => {
    return [...a, ...b];
};

const result = concatonate(nums,moreNums)
console.log(result);
console.log(nums);
console.log(moreNums);

// can also use the concat operator      array1.concat(...array2)