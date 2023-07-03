// Create a function that converts a text into a number reference to 
// each letter's position in the alphabet. A=1, B=2...

const alphabetPosition = (text) => {
    const string = [];
    [...text.toLowerCase()].forEach(char => {
      const ascii = char.charCodeAt();
        if(ascii >= 97 && ascii <= 122){
           string.push(ascii - 96);
        };
      });
    return string.toString().replace(/[^a-z0-9]/gi, ' ');
  }
  
  console.log(alphabetPosition("abcdefghijklmnopqrstuvwxyz"))

  // output: 
  // "The sun sets at seven o' clock."
  // 20 8 5 19 21 14 19 5 20 19 1 20 19 5 22 5 14 15 3 12 15 3 11

// output: 
  // "abcdefghijklmnopqrstuvwxyz"
  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26