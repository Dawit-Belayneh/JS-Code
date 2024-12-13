// first create variable for the subjects
    // the greade a b c d 
    //create a subject and assign the greade
    // assign to what the value of grade
    // how did you get the student
    //than calculate the average
// than add the point this subject 
//calculate the average point
// output the average score



// const grade = [a = 4, aMinus=3.75, bPlus=3.5, b =3.25, bMinus=3 , cPlus = 2.75 , c=2.5, cMinus=2.25, d=2];


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAverage(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

let grades=[];
let count=0;

function askForGrade() {
    if (count < 4) {
        rl.question(`Enter grade ${count + 1}: `, (input) => {
            const grade = parseFloat(input);
            if (isNaN(grade)) {
                console.log("Invalid input. Please enter a valid number.");
            } else {
                grades.push(grade);
                count++;
            }
            askForGrade();
        });
    } else {
        const average = calculateAverage(grades);
        console.log(`The average score is: ${average.toFixed(2)}`);
        rl.close();
    }
}

// Start the input process
askForGrade();
