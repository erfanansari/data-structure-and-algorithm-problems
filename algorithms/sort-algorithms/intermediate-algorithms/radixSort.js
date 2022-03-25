function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if (num === 1) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(numbers) {
    return Math.max(...numbers.map((num) => digitCount(num)))
}

function radixSort(numbers) {
    const maxDigitCount = mostDigits(numbers)
    for (let k = 0; k < maxDigitCount; k++) {
        const digitBuckets = Array.from({ length: 10 }, () => [])
        for (const number of numbers) {
            const digit = getDigit(number, k)
            digitBuckets[digit].push(number)
        }
        numbers = digitBuckets.flat()
    }
    return numbers
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))

// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements
// It exploits the fact that information about the size of a number is
// encoded in the number of digits
// More digits means a bigger number
// Time complexity: O(nk)
// Best Case: O(nk)
// Worst Case: O(nk) because of the way data is stored in computers
// worst case can be O(n log n)
// Space complexity: O(n + k)
