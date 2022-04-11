function countZeroes(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  while(leftIdx <= rightIdx) {
    let mid = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
    
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return arr.length - mid
    } else if (arr[mid] === 1) {
      leftIdx = mid + 1
    } else {
      rightIdx = mid - 1
    }
  }
  return 0
}
  

module.exports = countZeroes