import * as StudentFunction from "./utils/studentFunctions";
import { StudentScore } from "./utils/types";

//Individual Student declarations
let studentOne: StudentScore = {
    id: 1,
    name: "Johnny",
    scores: [
        { subject: "math", score: 81 },
        { subject: "english", score: 73 },
        { subject: "science", score: 92 }
    ]
}
let studentTwo: StudentScore = {
    id: 2, 
    name: "Alice", 
    scores: [ 
        { subject: "math", score: 80 }, 
        { subject: "english", score: 100 }, 
        { subject: "science", score: 90 }
    ]
}
let studentThree: StudentScore = {
    id: 3, 
    name: "Bobby", 
    scores: [ 
        { subject: "math", score: 50 }, 
        { subject: "english", score: 60 }, 
        { subject: "science", score: 70 }
    ],
    cohort: "Bootcamp-2"
}
let studentFour: StudentScore = {
    id: 4, 
    name: "Charlie", 
    scores: [ 
        { subject: "math", score: 75 }, 
        { subject: "english", score: 75 }, 
        { subject: "science", score: 75 }
    ],
    cohort: "Bootcamp-3"
}

// Array of students of type 'StudentScore'
const students: StudentScore[] = [
    studentOne,
    studentTwo,
    studentThree,
    studentFour
]

console.log("Student 1 status: " + StudentFunction.getStatus(studentOne));
console.log(StudentFunction.calculateAverage(studentOne.scores));
console.log(StudentFunction.filterPassingStudents(students))
console.log(StudentFunction.addDefaultCohort(students))

students.forEach(student => {
    console.log(StudentFunction.getStudentSummary(student));
    console.log("Best Subject: " + StudentFunction.getBestSubject(student));
})

console.log(StudentFunction.groupByCohort(students));
console.log(StudentFunction.rankStudents(students));
