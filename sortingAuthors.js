// sort the array of numbers

const array1 = [3,4,6,2,8,1];

const sorted = array1
.sort((a,b) => a-b);
console.log(array1,sorted);


// sort by author last name

const books = [
    {name: "Harry Potter", author: "Joanne Rowling"},
    {name: "Ender's Game", author: "Orson Card"},
    {name: "Jack's Journal", author: "Sequoia Kanies"},
];

books.sort((book1,book2) => {
    const authorLastName1 = book1.author.split(" ")[1];
    const authorLastName2 = book2.author.split(" ")[1];
    return authorLastName1 < authorLastName2 ? -1:1;
});

console.log(books);


// be careful because the .sort method mutates the original array,
// hence the duplicated sorted array in the console log for numbers