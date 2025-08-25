# Student Management in TypeScript
This project contains a simple TypeScript file that demonstrates fundamental concepts by managing student data and calculating scores.

The code defines a data structure for a student and includes several functions to perform common operations, such as calculating averages, filtering data, and modifying records.

## Key Features and Functions
StudentScore Interface: This interface defines the structure of a student object, including their id, name, and an array of scores. It also demonstrates:

**readonly property (id)** to prevent accidental modification.

**Optional property (cohort?)** to handle records that might not have this field.

**calculateAverage(numArray: number[]):** A function that takes an array of numbers and returns their average. It uses the .reduce() array method to sum the elements.

**filterPassingStudents(studentScores: StudentScore[]):** This function filters an array of StudentScore objects. It returns the names of all students whose average score is 75 or higher. It chains the .filter() and .map() array methods for a concise result.

**addDefaultCohort(studentScores: StudentScore[]):** This function iterates through a list of students and assigns a default "Bootcamp-1" value to the cohort field if it is not already present.

**getStudentSummary(studentScore: StudentScore):** This function takes a single student object and returns a tuple—an ordered array with a fixed number of elements. The tuple contains the student's name and their calculated average score.

## How to Run
To run this file, you'll need to have Node.js and TypeScript installed on your system.

Compile the TypeScript file to JavaScript:

tsc <filename>.ts

Run the compiled JavaScript file:

node <filename>.js
