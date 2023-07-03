// 1) Create an array of names from the given array of users
// 2) get back only active users
// 3) sort users by descending age
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

// best approach 
const names = users
.sort((user1, user2) => (user1.age > user2.age ? -1:1))
.filter((user) => user.isActive)
.map((user) => user.name);
console.log("names", names);