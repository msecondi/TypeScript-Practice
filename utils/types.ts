export interface SubjectScore {
    subject: "math" | "english" | "science",
    score: number;
}; //[]    if you put that at the end of this type alias, it's saying this type is an array of objects containing thos key/value pairs

//this ^ also accomplishes the same thing
// export type SubjectScores = SubjectScore[];

//INTERFACE
export interface StudentScore {
    readonly id: number; 
    name: string;
    scores: SubjectScore[]; //or SubjectScores.  if declared above
    cohort?: string;
    status?: "passing" | "failing" | "unknown"; //Literal
}