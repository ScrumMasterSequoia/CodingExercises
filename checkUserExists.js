// Check thta user with such name exists in an array of objects
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 55,
    },
    {
        id: 2,
        name: "Boon",
        isActive: true,
        age: 14,
    },
    {
        id: 3,
        name: "Lily",
        isActive: true,
        age: 16,
    }
];

// worst solution is for loop

// const doesNameExist = (name, users) => {
//     let exists = false;
//     for(let i=0;i<users.length;i++) {
//         if(users[i].name === name) {
//             exists= true;
//         }
//     }
//     return exists;
// }

//one liner solution
const doesNameExist = (name, arr) => arr.some((el) => el.name === name);
console.log(doesNameExist("Jack", users));

//boolean solution
// const doesNameExist = (name, arr) => {
//     const el = arr.find((el) => el.name === name);
//     return Boolean(el);
// };
// console.log(doesNameExist("Jack", users));
