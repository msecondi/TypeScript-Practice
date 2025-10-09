import * as StudentFunction from "./utils/studentFunctions";
import { StudentScore, Subjects } from "./utils/types";

const { Math, English, Science } = Subjects;

//Individual Student declarations
let studentOne: StudentScore = {
    id: 1,
    name: "Johnny",
    scores: [
        { subject: Math, score: 81 },
        { subject: English, score: 73 },
        { subject: Science, score: 92 }
    ]
}
let studentTwo: StudentScore = {
    id: 2, 
    name: "Alice", 
    scores: [ 
        { subject: Math, score: 80 }, 
        { subject: English, score: 100 }, 
        { subject: Science, score: 90 }
    ]
}
let studentThree: StudentScore = {
    id: 3, 
    name: "Bobby", 
    scores: [ 
        { subject: Math, score: 50 }, 
        { subject: English, score: 60 }, 
        { subject: Science, score: 70 }
    ],
    cohort: "Bootcamp-2"
}
let studentFour: StudentScore = {
    id: 4, 
    name: "Charlie", 
    scores: [ 
        { subject: Math, score: 75 }, 
        { subject: English, score: 75 }, 
        { subject: Science, score: 75 }
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
console.log("Filtered passing students: " + StudentFunction.filterPassingStudents(students))
console.log(StudentFunction.addDefaultCohort(students))

students.forEach(student => {
    console.log(StudentFunction.getStudentSummary(student));
    console.log("Best Subject: " + StudentFunction.getBestSubject(student));
})

console.log(StudentFunction.groupByCohort(students));
console.log(StudentFunction.rankStudents(students));
