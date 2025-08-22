
export const student = {
    name: 'Alice Johnson',
    subjects: ['Math', 'Science', 'English'],
    assignments: [
        { subject: 'Math', assignmentName: 'quiz',score:{
            exam: 10,
            quiz:40
        }, maxPoints: 50 },
        { subject: 'Science', assignmentName: 'report', score:{
            exam: 90,
            quiz:50
        }, maxPoints: 100 },
        { subject: 'English', assignmentName: 'essay', score:{
            exam: 10,
            quiz:8
        }, maxPoints: 20 }
    ],
  calculateAverage: function () {
    const weights = {
        exam: 0.7,
        quiz: 0.3
    };

    if (this.assignments.length === 0) return '0%';

    let totalWeightedScore = 0;
    let totalMaxPoints = 0;

    for (const a of this.assignments) {
        const examScore = a.score.exam || 0;
        const quizScore = a.score.quiz || 0;

        const weightedScore = (examScore * weights.exam) + (quizScore * weights.quiz);

        totalWeightedScore += weightedScore;
        totalMaxPoints += a.maxPoints;
    }

    const average = totalMaxPoints > 0
        ? ((totalWeightedScore / totalMaxPoints) * 100).toFixed(1)
        : '0';

    return `${average}%`;
}
};

console.log(student.calculateAverage());