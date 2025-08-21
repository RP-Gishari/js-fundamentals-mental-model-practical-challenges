export const student = {
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

        return`${(totalPercentage / this.assignments.length).toFixed(1)}%` ;
    }
};
console.log(student.calculateAverage())
