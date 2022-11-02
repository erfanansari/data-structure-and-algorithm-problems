/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.

// Example

// The original message was SOSSOS. Two of the message's characters were changed in transit.

// Function Description

// Complete the marsExploration function in the editor below.

// marsExploration has the following parameter(s):

// string s: the string as received on Earth
// Returns

// int: the number of letters changed during transmission
// Sample Input 0
// SOSSPSSQSSOR
// Sample Output 0
// 3

// function marsExploration(s) {
//     let count = 0
//     const arr = []
//     for (let i = 0; i < s.length; i++) {
//         if (i % 3 === 0) {
//             arr.push(s.slice(i, i + 3))
//         }
//     }

//     for (const el of arr) {
//         if (el[0] !== 'S') count++
//         if (el[1] !== 'O') count++
//         if (el[2] !== 'S') count++
//     }

//     return count
// }

function marsExploration(s) {
    // Write your code here
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (i % 3 === 0 || i % 3 === 2) {
            if (s[i] !== 'S') {
                count++
            }
        } else if (s[i] !== 'O') {
            count++
        }
    }
    return count
}

console.log(marsExploration('SOSSPSSQSSORFER')) // 6
