function solve(arr) {
	let lowestNumber;
	let result = [], newArr = [];
	
	while (arr.length != 0) {
		newArr = [];
		result.push(arr.length);
		lowestNumber = Math.min(...arr);

		arr.forEach(e => {
			if (e - lowestNumber > 0) {
				newArr.push(e - lowestNumber);
			}
		});
		arr = newArr;
	}

	return result;
}


console.log(solve([5, 4, 4, 2, 2, 8]));