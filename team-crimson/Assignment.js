import { student } from "./averageCulculate.js";
export function addAssignment(subject, assignmentName, score, maxPoints) {
    if(typeof(subject)!=="string"||typeof(assignmentName)!=="string"||typeof(score)!=="number"||typeof(maxPoints)!=="number"){
        return "invalid input"
    }
      if (student.subjects.includes(subject)) {
        return "Subject already exist";
    }
student.assignments.push({
  subject,
  assignmentName,
  score,
  maxPoints
});
student.subjects.push(subject)
}
console.log(addAssignment("french", "quizes", 100, 100))