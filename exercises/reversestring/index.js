// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// INITIAL PROBLEM
// function reverse(str){}
// module.exports = reverse;

// One Way (uses built in functions (.split, .reverse, .join). May not be best if asked to not use built ins)
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join("");
// };

// Cleaned up answer using built ins
// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join("");
// }

// Uses a for loop with updated syntax
// function reverse(str){
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// The most technical answer
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '');

// }

// the cleanest most technical answer
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }



function reverse(str) {
    return str.split('').reduce((reversed, character)=> {
        return character + reversed;
    }, '');
}

module.exports = reverse;
