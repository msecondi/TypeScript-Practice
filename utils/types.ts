export enum Subjects {
    Math = "math",
    English = "english",
    Science = "science"
}

export interface SubjectScore {
    subject: Subjects,
    score: number;
}; //[]    if you put that at the end of this type alias, it's saying this type is an array of objects containing those key/value pairs

// this also accomplishes the same thing as ^that^
// export type SubjectScores = SubjectScore[];

//INTERFACE
export interface StudentScore {
    readonly id: number; 
    name: string;
    scores: SubjectScore[]; //or SubjectScores.  if declared above
    cohort?: string;
    status?: "passing" | "failing" | "unknown"; //Literal
}