import { student } from "./averageCulculate.js";

const gradingScale = { A: 90, B: 80, C: 70, D: 60, F: 0 };
let total = 0;

for (let a of student.assignments) {
  const p = (a.score.exam + a.score.quiz) / a.max * 100;
  total += p;

  let grade = 'F';
  for (let g in gradingScale) {
    if (p >= gradingScale[g] && gradingScale[g] > gradingScale[grade]) {
      grade = g;
    }
  }

  console.log(`${a.subject}: ${grade === 'F' ? 'Fail' : 'Pass'}, Grade ${grade}`);
}

console.log(`Honor Roll: ${total / student.assignments.length >= 85 ? 'Yes' : 'No'}`);
console.log(`Improvement Trend: Not enough data`);