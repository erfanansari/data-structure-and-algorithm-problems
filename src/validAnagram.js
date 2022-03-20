// const sortedStr = (str) => {
//   const chars = {};
//   [...str.replace(/[^\w]/g, "").toLowerCase()].forEach((char) => (chars[char] = chars[chars] + 1 || 1));
//   return chars;
// };

// function anagrams(stringA, stringB) {
//   const aCharMap = sortedStr(stringA);
//   const bCharMap = sortedStr(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;
//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// const sortedStr = (str) =>
//     str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')

// const anagrams = (stringA, stringB) => {
//     return sortedStr(stringA) === sortedStr(stringB)
// }

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }
    const lookup = {}

    for (let i = 1; i < first.length; i++) {
        const letter = first[i]
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
    }
    for (let i = 1; i < second.length; i++) {
        const letter = second[i]
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
        return true
    }
}

// console.log(validAnagram('hello', 'olleh'))
