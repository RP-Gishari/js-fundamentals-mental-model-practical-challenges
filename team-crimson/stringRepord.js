const student = {
    name: 'Alice Johnson',
    subjects: ['Math', 'Science', 'English'],
    assignments: [
        { subject: 'Math', score: 85 },
        { subject: 'Science', score: 90 },
        { subject: 'English', score: 78 }
    ],
    calculateAverage: function() {
        if (this.assignments.length === 0) return 0;
        const total = this.assignments.reduce((sum, a) => sum + a.score, 0);
        return` ${(total / this.assignments.length).toFixed(2)}%`;
    },
    calculateTotal: function() {
        return `${this.assignments.reduce((sum, a) => sum + a.score, 0).toFixed(2)} %`
    }
};
const report = Object.create(student);
console.log("Student Name:", report.name);
console.log("Total Score:", report.calculateTotal());
console.log("Average Score:", report.calculateAverage());
console.table(report.assignments);