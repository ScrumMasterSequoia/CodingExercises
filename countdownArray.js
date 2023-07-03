// create a function that makes an array populated with elements counting 
// down from an input variable.

function reverseSeq(n) {
    let array = [];
    for (let i=n; i > 0; i--)
   array.push(i);
    return array
  };
  console.log(reverseSeq(5))