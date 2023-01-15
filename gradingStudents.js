function solve(grades) {
    let newGrades = [];
    grades.forEach(element => {
        let roundNumber = Math.ceil(element / 5) * 5;

        if (roundNumber >= 40 && Math.abs(roundNumber - element) < 3) {
            element = roundNumber;
        }
        newGrades.push(element);
    });

    return newGrades;
}


console.log(solve([73, 67, 38, 33]));