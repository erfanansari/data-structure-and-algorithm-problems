function merge(arr1, arr2) {
    const result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])) // [1, 9, 10, 24, 72, 73, 76]

// It's a combination of 3 things, splitting up sorting and merging
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or elements
// then building up a newly sorted array
// Its a Divide and Conquer approach
// Time Complexity: O(n log n)
// Best Case: O(n log n)
// O(log n) decompositions and O(n) comparisons per decomposition
// Space Complexity: O(n)
