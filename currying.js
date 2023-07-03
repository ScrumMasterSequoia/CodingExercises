// 1) write a function which helpts to multiply A and B and returns the product
// 2) Create a curry funtion
// 3) What can your curry function do?

// 1) 
    // const multiply = (a) => {
    //     return (b) => {
    //         return a*b;
    //     };
    // };

    //rewritten as a single line with identicle logic

    // const multiply = (num1) => (num2) => num1 * num2;

    // console.log(multiply(5)(8));

// 2)
    // const curriedSum
    // const curry = function (fn) {
    //     var arity = fn.length;
    //     return function f1(...args) {
    //         if (args.length >= arity) {
    //             return fn (...args);
    //         }else{
    //             return function f2(...moreArgs) {
    //                 var newArgs = args.concat(moreArgs);
    //                 return f1(...newArgs);
    //             };
    //         }
    //     };
    // };

    // const curriedSum = curry((a, b, c) => a + b + c);
    // const partiallyCurriedSum = curriedSum(1);
    // console.log(partiallyCurriedSum(2,3))

// 3)

    // const get = curry((property, object) => object[property]);
    // const getId = get("id");
    // const map = curry((fn, values) => values.map(fn));
    // const getIds = map(getId);

    //curry functions always return functions. If you pass one out of three parameters the first time, then the 
    //curry function will return a function which accepts the missing inputs in this case


    // simple example of currying, where the curry function only takes one input at a time
    // and returns a nother curry function until all inputs have been received.

    const buildSandwich = (ingredient1) => {
        return (ingredient2) => {
            return (ingredient3) => {
                return `${ingredient1, ingredient2, ingredient3}`;
            }
        }
    }
    
    //console.log(buildSandwich("Tomato"))