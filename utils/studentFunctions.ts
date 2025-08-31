import { StudentScore } from "./types";

//FUNCTIONS
export function calculateAverage(numArray: number[]): number {
    let total: number = numArray.reduce((accum, element): number => {
        return accum + element;
    }, 0)
    return (total / numArray.length);
}

export function filterPassingStudents(studentScores: StudentScore[]): Array<string> {
    return studentScores.filter(student => (
        calculateAverage(student.scores) >= 75
    ))
    .map(student => student.name)
}

export function getStatus(student: StudentScore): string {
    let average: number = calculateAverage(student.scores)
    return average >= 75 ? "passing" : "failing";
}

export function getStudentSummary(studentScore: StudentScore): [string, number, string] {
    return [studentScore.name, calculateAverage(studentScore.scores), getStatus(studentScore)]
}

export function addDefaultCohort(studentScores: StudentScore[]): StudentScore[] {
    return studentScores.map(student => {
        if (!student.cohort) {
            student.cohort = "Bootcamp-1"
        }
        return student;
    })
}

//Group students based on cohort
export function groupByCohort(students: StudentScore[]): Record<string, string[]> {
    const groupedStudents: Record<string, string[]> = {};

    for(const student of students) {
        const cohort = student.cohort ?? "Bootcamp-1";

        if(!groupedStudents[cohort]) {
            groupedStudents[cohort] = [];
        }

        groupedStudents[cohort].push(student.name);
    }

    return groupedStudents;
}