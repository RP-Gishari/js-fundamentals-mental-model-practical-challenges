import { student } from "./averageCulculate.js";

let currentSemester = 'Fall 2024';
let gradingScale = { A: 90, B: 80, C: 70, D: 60, F: 0 };
function calculateGPA(average) {
    for (let grade in gradingScale) {
        if (average >= gradingScale[grade]) {
            return grade;
        }
    }
    return 'F'; 
}
const avgStr = student.calculateAverage();
const avg = parseFloat(avgStr);
const gpa = calculateGPA(avg);
console.log(`Average: ${avg.toFixed(2)}%  Grade: ${gpa}`);