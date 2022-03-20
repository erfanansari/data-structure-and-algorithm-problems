function binarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== value && start <= end) {
        if (value < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === value ? middle : -1
}

console.log(binarySearch([1, 2, 3, 34, 45, 51, 56, 687], 687)) // 687

// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search is a Divide and Conquer algorithm
// Binary search only works on sorted arrays
// Divide and conquer is a technique where you break down a problem into
// smaller subproblems until you can solve them individually
// Time Complexity: O(log n)
