import { StudentScore, SubjectScore, Subjects } from "./types.js";

export const PASS_MARK = 75 as const;

export function calculateAverage(scoreArray: SubjectScore[]): number {
    let total: number = scoreArray.reduce((accum, element): number => {
        return accum + element.score;
    }, 0)
    return (total / scoreArray.length);
}

export function filterPassingStudents(studentScores: StudentScore[]): Array<string> {
    return studentScores
        .filter(student => (
            calculateAverage(student.scores) >= PASS_MARK))
        .map(student => student.name)
}

export function getStatus(student: StudentScore): string {
    let average: number = calculateAverage(student.scores)
    return student.status = average >= PASS_MARK ? "passing" : "failing";
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

// Write a function rankStudents(studentScores: StudentScore[]): StudentScore[] that sorts students by their average score,
// highest to lowest. If there’s a tie, sort alphabetically by name.
export function rankStudents(studentScores: StudentScore[]): {name: string, average: number}[] {
    let average = studentScores.map((student: StudentScore) => {
        return {
            name: student.name,
            average: calculateAverage(student.scores),
        }
    });
    return average.sort((a, b) => (b.average - a.average));
}

//Write a function getBestSubject(student: StudentScore): string that returns the subject with the highest score.
export function getBestSubject(student: StudentScore): SubjectScore["subject"] { //typescript now enforces string literal return set in SubjectScore
    return student.scores.reduce((best, curr) => curr.score > best.score ? curr : best).subject;
}

// new: return a new StudentScore with updated score for given subject (immutable)
export function updateStudentScore(
    student: StudentScore,
    subject: Subjects,
    newScore: number
): StudentScore {
    return {
        ...student,
        scores: student.scores.map(score => {
            return score.subject === subject ? { ...score, score: newScore } : score
        })
    };
}