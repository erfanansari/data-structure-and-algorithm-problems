function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
        console.log(arr)
    }
    return arr
}

selectionSort([33, 22, 10, 19, 17]) // [10, 17, 19, 22, 33]

// Similar to bubble sort, but instead of first placing large values into sorted positions,
// it places small values into sorted position
// Time Complexity: O(n^2)
// Best Case: O(n)
