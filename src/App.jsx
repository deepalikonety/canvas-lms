import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";
import Sidebar from "./components/Sidebar";
import UserMenu from "./components/UserMenu";

export default function App() {
  const studentName = "Deepali";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* Main Content */}
       <div className="flex-1 bg-white dark:bg-[var(--canvas-dark-bg)] text-gray-900 dark:text-[var(--canvas-dark-text)] transition-colors">

          {/* Top bar */}
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <div className="flex items-center gap-4">
              {/* Hamburger (only on mobile) */}
              <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu size={28} />
              </button>
              <div>
                <h1 className="text-xl font-semibold">Welcome, {studentName}</h1>
                <p className="text-sm text-gray-500">{new Date().toDateString()}</p>
              </div>
            </div>
            <UserMenu />
          </div>

          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
