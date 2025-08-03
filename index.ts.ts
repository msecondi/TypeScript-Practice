function calculateAverage(numArray: number[]): number {
    let total: number = numArray.reduce((accum, element): number => {
        return accum + element;
    }, 0)
    return (total / numArray.length);
}

interface StudentScore {
    name: string;
    scores: number[];
    cohort?: string; //expansion
}

let studentOne: StudentScore = {
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
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70], cohort: "Bootcamp-2" },
  { name: "Charlie", scores: [75, 75, 75] }
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
