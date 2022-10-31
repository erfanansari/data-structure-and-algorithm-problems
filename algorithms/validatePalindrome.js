function validatePalindrome(str) {
    const { length } = str
    // Use for loop to divide the words into 2 half
    for (let i = 0; i < length / 2; i++) {
        // validate the first and last characters are same
        if (str[i] !== str[length - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(validatePalindrome('aaabaaa')) // true
