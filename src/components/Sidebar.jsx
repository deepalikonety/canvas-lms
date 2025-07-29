import { Link, useLocation } from "react-router-dom";
import { Menu, LayoutDashboard, Calendar, Inbox, HelpCircle, BookOpen, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Courses", path: "/courses/1", icon: <BookOpen size={20} /> },
    { name: "Calendar", path: "#", icon: <Calendar size={20} /> },
    { name: "Inbox", path: "#", icon: <Inbox size={20} /> },
    { name: "Help", path: "#", icon: <HelpCircle size={20} /> },
  ];

  return (
   <div
  className={`fixed inset-y-0 left-0 bg-[var(--canvas-purple)] dark:bg-[var(--canvas-purple)] text-white p-4 w-64 transform 
    ${open ? "translate-x-0" : "-translate-x-full"} 
    transition-transform md:translate-x-0 md:static md:block z-50`}
>

      <button className="md:hidden mb-6" onClick={() => setOpen(false)}>
        <X size={24} />
      </button>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 p-1.5 text-sm rounded 
                ${
                  location.pathname === item.path
                    ? "bg-[var(--canvas-dark-purple)] border-l-4 border-white"
                    : "hover:bg-[var(--canvas-dark-purple)]"
                }`}
              onClick={() => setOpen(false)} 
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <DarkModeToggle />
      </div>
    </div>
  );
}
