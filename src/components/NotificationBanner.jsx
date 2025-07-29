import { useState } from "react";
import { X } from "lucide-react"; 
export default function NotificationBanner({ message }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-yellow-100 dark:bg-yellow-600 border-l-4 border-yellow-300 text-yellow-500 dark:text-yellow-200 p-4 mb-6 rounded relative">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-yellow-700 dark:text-yellow-300 hover:text-yellow-900"
      >
        <X size={18} />
      </button>
      <p className="font-semibold">Announcement</p>
      <p>{message}</p>
    </div>
  );
}
