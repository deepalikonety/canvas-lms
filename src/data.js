// src/data.js
export const courses = [
  { id: 1, title: "Math 101", instructor: "Dr. Smith", progress: 70, description: "Introduction to basic math concepts.", modules: ["Algebra", "Geometry", "Statistics"] },
  { id: 2, title: "Physics 201", instructor: "Prof. Adams", progress: 50, description: "Explore the fundamentals of physics.", modules: ["Kinematics", "Dynamics", "Thermodynamics"] },
  { id: 3, title: "Chemistry 301", instructor: "Dr. Brown", progress: 90, description: "Advanced concepts in Chemistry.", modules: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"] },
  { id: 4, title: "Biology 101", instructor: "Dr. White", progress: 40, description: "Learn the essentials of biology.", modules: ["Cell Biology", "Genetics", "Ecology"] },
  { id: 5, title: "Computer Science 101", instructor: "Prof. Clark", progress: 85, description: "Introduction to programming and algorithms.", modules: ["Programming Basics", "Data Structures", "Algorithms"] },
  { id: 6, title: "History 202", instructor: "Dr. Johnson", progress: 60, description: "Dive into historical events and figures.", modules: ["Ancient History", "Modern History", "World Wars"] },
];

export const tasks = [
  { id: 1, task: "Complete Math Assignment 1", due: "2025-07-30", done: false },
  { id: 2, task: "Read Chapter 5 (Physics)", due: "2025-07-28", done: false },
  { id: 3, task: "Submit Biology Project", due: "2025-07-29", done: true },
  { id: 4, task: "Review History Notes", due: "2025-07-31", done: false },
];

export const assignments = [
  { id: 1, title: "Assignment 1", due: "2025-07-30", status: "Submitted" },
  { id: 2, title: "Assignment 2", due: "2025-08-05", status: "Pending" },
];

export const grades = [
  { id: 1, courseId: 1, title: "Assignment 1", score: "85%" },
  { id: 2, courseId: 1, title: "Midterm Exam", score: "90%" },
  { id: 3, courseId: 2, title: "Lab Report", score: "70%" },
  { id: 4, courseId: 3, title: "Project", score: "88%" },
  { id: 5, courseId: 4, title: "Quiz", score: "75%" },
  { id: 6, courseId: 5, title: "Final Project", score: "95%" },
  { id: 7, courseId: 6, title: "Essay", score: "80%" },
];

