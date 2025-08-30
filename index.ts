import * as StudentFunction from "./studentFunctions";
import { StudentScore } from "./types";

//Student declarations
let studentOne: StudentScore = {
    id: 1,
    name: "Johnny",
    scores: [81, 73, 92]
}

const students: StudentScore[] = [
    studentOne,
    { id: 2, name: "Alice", scores: [80, 90, 100] },
    { id: 3, name: "Bobby", scores: [50, 60, 70], cohort: "Bootcamp-2" },
    { id: 4, name: "Charlie", scores: [75, 75, 75], cohort: "Bootcamp-3"  }
]

console.log("Student 1 status: " + StudentFunction.getStatus(studentOne));
console.log(StudentFunction.calculateAverage(studentOne.scores));
console.log(StudentFunction.filterPassingStudents(students))
console.log(StudentFunction.addDefaultCohort(students))

students.forEach(student => {
    console.log(StudentFunction.getStudentSummary(student));
})

console.log(StudentFunction.groupByCohort(students));