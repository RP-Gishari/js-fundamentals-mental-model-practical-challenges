const student = {
    name: 'Alice Johnson',
    subjects: ['Math', 'Science', 'English'],
    assignments: [
        { subject: 'Math', assignmentName: 'quiz1', score: 45, maxPoints: 50 },
        { subject: 'Science', assignmentName: 'report', score: 85, maxPoints: 100 },
        { subject: 'English', assignmentName: 'essay', score: 18, maxPoints: 20 }
    ],
    calculateAverage: function() {
        if (this.assignments.length === 0) return 0;

        let totalPercentage = 0;

        for (let i = 0; i < this.assignments.length; i++) {
            const a = this.assignments[i];
            const percentage = (a.score / a.maxPoints) * 100;
            totalPercentage += percentage;
        }

        return (totalPercentage / this.assignments.length);
    }
};

const gradingScale = { A: 90, B: 80, C: 70, D: 60, F: 0 };

function calculateGPA(average) {
    for (let grade in gradingScale) {
        if (average >= gradingScale[grade]) {
            return grade;
        }
    }
    return 'F'; 
}

const avg = student.calculateAverage();
const gpa = calculateGPA(avg);
console.log(`Average: ${avg.toFixed(2)}% → Grade: ${gpa}`);