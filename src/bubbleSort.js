function bubbleSort(arr) {
    // The nowSwaps variable is a performance optimization to avoid the need to
    // check on every iteration if the array is already sorted
    let nowSwaps = false
    for (let i = arr.length; i > 0; i--) {
        nowSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // prettier-ignore
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                nowSwaps = false
            }
        }
        if (nowSwaps) break
    }
    return arr
}

console.log(bubbleSort([3, 2, 6, 30, 49, 57, 60])) // [2, 3, 6, 30, 49, 57, 60]

// Not that all efficient , Not commonly used but in one use case it does excel
// Why it's called bubble sort(syncing sort)? Because it's a sorting algorithm where the largest values bubble up to the top!
// Time Complexity: O(n^2)
// Best Case: O(n)
