import { useParams, Link } from "react-router-dom";
import Tabs from "../components/Tabs";
import { courses, assignments, grades } from "../data";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const courseGrades = grades.filter(g => g.courseId === parseInt(id));
  const defaultDescription = "This course provides an overview of key topics, assignments, and resources to help you succeed.";
  const defaultModules = ["Introduction", "Core Concepts", "Final Project"];
  const overallGrade = courseGrades.length
  ? Math.round(courseGrades.reduce((sum, g) => sum + parseInt(g.score), 0) / courseGrades.length)
  : 0;

  const tabData = [
    {
      label: "Overview",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Course Overview</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{course.description || defaultDescription}</p>
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">Modules</h4>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            {(course.modules || defaultModules).map((m, idx) => <li key={idx}>{m}</li>)}
          </ul>
        </div>
      ),
    },
    {
      label: "Assignments",
      content: (
        <table className="w-full border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Title</th>
              <th className="p-2 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Due Date</th>
              <th className="p-2 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="p-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{a.title}</td>
                <td className="p-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{a.due}</td>
                <td className="p-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
    {
      label: "Grades",
      content: (
        <div>
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                <th className="p-3 border dark:border-gray-700">Title</th>
                <th className="p-3 border dark:border-gray-700">Score</th>
              </tr>
            </thead>
            <tbody>
              {courseGrades.map((g) => (
                <tr key={g.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="p-3 border dark:border-gray-700">{g.title}</td>
                  <td className="p-3 border dark:border-gray-700">{g.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">Overall Grade Progress</h4>
          <div className="w-full bg-gray-200 rounded-full h-3">
         <div
         className="bg-[var(--canvas-purple)] h-3 rounded-full"
         style={{ width: `${overallGrade}%` }}
        >
        </div>
        </div>
        <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
        Current Grade: {overallGrade}%
        </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        <Link to="/" className="hover:underline">Dashboard</Link> &gt; 
        <Link to={`/courses/${id}`} className="hover:underline"> {course.title}</Link> &gt; Module
      </p>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{course.title}</h1>
      <Tabs tabs={tabData} />
    </div>
  );
}
