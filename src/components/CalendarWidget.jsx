import { useState } from "react";
import Calendar from "react-calendar";
import { tasks } from "../data"; 
import 'react-calendar/dist/Calendar.css';

export default function CalendarWidget() {
  const [date, setDate] = useState(new Date());
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateClick = (clickedDate) => {
    const tasksForDate = tasks.filter(
      (task) => new Date(task.due).toDateString() === clickedDate.toDateString()
    );
    if (tasksForDate.length > 0) {
      setSelectedTasks(tasksForDate);
      setModalOpen(true);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-[var(--canvas-dark-panel)] transition-colors">
      <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={handleDateClick}
        className="rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        tileContent={({ date, view }) =>
          view === 'month' && tasks.some(task => new Date(task.due).toDateString() === date.toDateString()) ? (
            <div className="flex justify-center mt-1">
              <div className="w-2 h-2 rounded-full bg-[var(--canvas-purple)]"></div>
            </div>
          ) : null
        }
      />

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
              Tasks for {date.toDateString()}
            </h3>
            <ul className="space-y-2">
              {selectedTasks.map((task, idx) => (
                <li key={idx} className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
                  {task.task}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 rounded bg-[var(--canvas-purple)] text-white hover:bg-[var(--canvas-dark-purple)]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
