function solve(s) {
	let hour = s[0] + s[1];
	let minute = s[3] + s[4];
	let second = s[6] + s[7];
	let amPm = s[8] + s[9];
	let convertedTime;

	if (amPm == "PM") {
		hour = parseInt(hour);
		hour += 12;
		
		if (hour >= 24) {
			hour -= 24;
			
			if (hour == 0) {
				hour = "12";
			}
		}
	} else {
		if (hour == 12) {
			hour = "00";
		}
	}
	
	convertedTime = hour + ":" +minute + ":" + second;
	
	return convertedTime;
}


console.log(solve("12:45:54PM");)