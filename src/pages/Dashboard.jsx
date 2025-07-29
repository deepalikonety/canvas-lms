import { courses, tasks } from "../data";
import CourseCard from "../components/CourseCard";
import ToDoList from "../components/ToDoList";
import NotificationBanner from "../components/NotificationBanner";
import CalendarWidget from "../components/CalendarWidget";

export default function Dashboard() {
  return (
    <div className="p-6">
      <NotificationBanner message="Midterm exams start next week. Check your course pages for schedules." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
       
        <div>
          <ToDoList tasks={tasks} />
          <CalendarWidget />
        </div>
      </div>
    </div>
  );
}
