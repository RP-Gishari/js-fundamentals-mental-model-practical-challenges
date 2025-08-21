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
        return total / this.assignments.length;
    }
};

const report = new student;
const head = [];

for (let key in report) {   head.push(key + "||");
}
console.log(report.name); 
console.log(head.join(' '));         
console.log(report.calculateAverage()); 