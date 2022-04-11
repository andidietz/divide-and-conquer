function findFloor(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
	if (arr.length === 0) return -1
  if (num >= arr[rightIdx]) return arr[rightIdx]

	while (leftIdx <= rightIdx) {
		var midPoint = Math.floor((leftIdx + rightIdx) / 2)
		let midVal = arr[midPoint]

		if (midVal === num) {
			return midVal
		} else if (midPoint > 0 && arr[midPoint - 1] <= num && num < midVal) {
			return arr[midPoint - 1]
		} 

		if (num < midVal) {   
			rightIdx = midPoint - 1
		} else {
			leftIdx = midPoint + 1
		}
	}
	return -1
}


module.exports = findFloor