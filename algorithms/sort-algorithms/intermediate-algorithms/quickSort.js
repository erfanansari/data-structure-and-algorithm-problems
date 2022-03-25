function getPivotIndex(arr, start = 0, end = arr.length + 1) {
    const pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            ;[arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    ;[arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = getPivotIndex(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([-1, 10, 5, 2, 3])) // [-1, 2, 3, 5, 10]

// Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot
// in the sorted array should end up
// Once the pivot is positioned appropriately, quick soft can be applied on either side of the pivot
// Time complexity: O(n log n)
// Best Case: O(n log n)
// Worst Case: O(n^2) happens when the pivot is the smallest or largest element in the array
// Space complexity: O(log n)
