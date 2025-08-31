//INTERFACE
export interface StudentScore {
    readonly id: number; 
    name: string;
    scores: number[];
    cohort?: string; //expansion
}