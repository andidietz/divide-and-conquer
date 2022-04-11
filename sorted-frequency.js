function findFirst(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
	while (rightIdx >= leftIdx) {
		let midPoint = Math.floor((leftIdx + rightIdx) / 2)
		let midVal = arr[midPoint]
		
		if ((midPoint === 0 || num > arr[midPoint - 1]) && midVal === num) {
			return midPoint
		} else if (num > midVal) {
			leftIdx = midPoint + 1
		} else {
			rightIdx = midPoint - 1
		}
	}
	return -1
}

function findLast(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
	while (rightIdx >= leftIdx) {
		let midPoint = Math.floor((leftIdx + rightIdx) / 2)
		let midVal = arr[midPoint]

		if ((midPoint === arr.length - 1 || num < arr[midPoint + 1]) && midVal === num) {
			return midPoint
		} else if (num < midVal) {
			rightIdx = midPoint - 1
		} else {
			leftIdx = midPoint + 1
		}
	}
	return -1
}

function sortedFrequency(arr, num) {
	let firstIdx = findFirst(arr, num)
	if (firstIdx === -1) return firstIdx
	let lastIdx = findLast(arr, num)

	return lastIdx - firstIdx + 1
}
  

module.exports = sortedFrequency