function predictFinalGrade(currentGrades, upcomingAssignments) {
  const projectedScores = upcomingAssignments.map(a => a.score / a.maxPoints);
  const allScores = [...currentGrades, ...projectedScores];
  const avg = allScores.reduce((sum, s) => sum + s, 0) / allScores.length;
  return avg * 100;
}