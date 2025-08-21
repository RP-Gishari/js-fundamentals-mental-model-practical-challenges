
export function predictFinalGrade(currentGrades, upcomingAssignments) {
  const projectedScores = upcomingAssignments.map(a => a.score / a.maxPoints);
  const allScores = [...currentGrades, ...projectedScores];
  const avg = allScores.reduce((sum, s) => sum + s, 0) / allScores.length;
  return avg * 100;
}

const currentGrades = [0.9, 0.85, 0.95];
const upcomingAssignments = [
  { subject: "History", score: 40, maxPoints: 50 },
  { subject: "Biology", score: 18, maxPoints: 20 }
];

const finalPrediction = predictFinalGrade(currentGrades, upcomingAssignments);
console.log(`Predicted Final Grade: ${finalPrediction.toFixed(1)}%`);