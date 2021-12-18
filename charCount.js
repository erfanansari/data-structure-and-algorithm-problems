function charCount(str) {
    const result = {}
    for (const char of str) {
        if (/[a-z0-9]/.test(char)) {
            // if (result[char]) {
            //     result[char]++
            // } else {
            //     result[char] = 1
            // }
            result[char] = ++result[char] || 1
        }
    }
    return result
}

console.log(charCount('hello my name is erfan'))
