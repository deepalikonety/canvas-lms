import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
   <div className="p-3 rounded-lg shadow bg-white dark:bg-[var(--canvas-dark-panel)] transition-colors">
  <h2 className="text-lg font-bold">{course.title}</h2>
  <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div className="bg-[var(--canvas-purple)] h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
      </div>
      <Link
        to={`/courses/${course.id}`}
        className="block text-center bg-[var(--canvas-purple)] text-white py-2 rounded hover:bg-[var(--canvas-dark-purple)] transition"
      >
        Go to Course
      </Link>
    </div>
  );
}
