function bubbleSort(arr) {
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
