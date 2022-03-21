function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i]
        let j = i - 1
        for (; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

console.log(insertionSort([2, 1, 9, 76, 4])) // [1, 2, 4, 9, 76]

// Builds up the sort by gradually creating a larger left portion which is always sorted
// Time Complexity: O(n^2)
// Best Case: O(n)
// It's a online algorithms which is an algorithm that can work as data is coming in
