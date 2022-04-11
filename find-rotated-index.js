function binarySearch(array, num, leftIdx, rightIdx) {
	if (array.length === 0) return -1
	if (num < array[leftIdx] || num > array[rightIdx]) return -1

	while (leftIdx <= rightIdx) {
		var midPoint = Math.floor((leftIdx + rightIdx) / 2)
		let midVal = array[midPoint]

		if (midVal === num) {
			return midPoint
		} else if (num < midVal) {
			rightIdx = midPoint - 1
		} else {
			leftIdx = midPoint + 1
		}
	}
	return -1
}

// Intentionally:
		// - did not rename 'array'
		// - did not modularized findRotatedIndex().
// Deconstructed the modularized solution into a non-modularized
// version to check my understanding of the code.

function findRotatedIndex(array, num, leftIdx = 0, rightIdx = array.length + 1) {
	let pivotPoint

	while (leftIdx <= rightIdx && !pivotPoint) {
		var midPoint = Math.floor((leftIdx + rightIdx) / 2)
		let midVal = array[midPoint]

		if (midVal > array[midPoint + 1]) {
			pivotPoint = midPoint + 1
		}
		else if (array[leftIdx] <= midVal ) {
			leftIdx = midPoint + 1
		} else {
			rightIdx = midPoint - 1
		}
	}

	if (pivotPoint > 0 && num >= array[0] && num <= array[pivotPoint - 1]) {
		return binarySearch(array, num, 0, pivotPoint - 1)
	} else {
		return binarySearch(array, num, pivotPoint, array.length - 1)
	}
}
  

module.exports = findRotatedIndex