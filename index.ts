function calculateAverage(numArray: number[]): number {
    let total: number = numArray.reduce((accum, element): number => {
        return accum + element;
    }, 0)
    return (total / numArray.length);
}

interface StudentScore {
    readonly id: number; 
    name: string;
    scores: number[];
    cohort?: string; //expansion
}

let studentOne: StudentScore = {
    id: 1,
    name: "Johnny",
    scores: [81, 73, 92]
}

console.log(calculateAverage(studentOne.scores))

function filterPassingStudents(studentScores: StudentScore[]): Array<string> {
    return studentScores.filter(student => (
        calculateAverage(student.scores) >= 75
    ))
    .map(student => student.name)
}

const students = [
  { id: 2, name: "Alice", scores: [80, 90, 100] },
  { id: 3, name: "Bob", scores: [50, 60, 70], cohort: "Bootcamp-2" },
  { id: 4, name: "Charlie", scores: [75, 75, 75] }
]

console.log(filterPassingStudents(students))

function addDefaultCohort(studentScores: StudentScore[]): StudentScore[] {
    return studentScores.map(student => {
        if (!student.cohort) {
            student.cohort = "Bootcamp-1"
        }
        return student;
    })
}

console.log(addDefaultCohort(students))

function getStudentSummary(studentScore: StudentScore): [string, number] {
    return [studentScore.name, calculateAverage(studentScore.scores)]
}

console.log(getStudentSummary(studentOne))