import { useState } from "react";

export default function ToDoList({ tasks }) {
  const [items, setItems] = useState(tasks);

  const toggleTask = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-[var(--canvas-dark-panel)] transition-colors">
      <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">To-Do List</h2>
      <ul className="space-y-3">
        {items.map(task => (
          <li key={task.id} className="flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <span className={`${task.done ? "line-through text-gray-400" : "text-gray-900 dark:text-gray-100"}`}>
                {task.task}
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(task.due).toDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
