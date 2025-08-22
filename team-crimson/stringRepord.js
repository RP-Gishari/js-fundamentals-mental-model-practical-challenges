import { addAssignment} from "./Assignment.js";
import { student } from "./averageCulculate.js";
student.calculateTotal = function () {
    const total = this.assignments.reduce((sum, a) => sum + a.score, 0);
    return `${total.toFixed(2)}%`;
};
const report = Object.create(student);
console.log("Student Name:", report.name);
console.log("Total Score:", report.calculateTotal());
console.log("Average Score:", report.calculateAverage());
console.table(report.assignments);