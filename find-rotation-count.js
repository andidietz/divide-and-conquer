function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  if (arr.length === 0) return -1

	while (leftIdx <= rightIdx) {
		var midPoint = Math.floor((leftIdx + rightIdx) / 2)
		let midVal = arr[midPoint]

		if (arr[midPoint + 1] < midVal) {
			return midPoint + 1
		} else if (midVal < arr[midPoint - 1]) {
			return midPoint
		}
	
		if (rightIdx > midVal) {
			rightIdx = midPoint - 1
		} else {
			leftIdx = midPoint + 1
		}
	}
	return 0
}


module.exports = findRotationCount