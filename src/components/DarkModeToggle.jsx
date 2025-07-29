import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-sm">{dark ? "Dark" : "Light"}</span>
      <div
        onClick={() => setDark(!dark)}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors 
          ${dark ? "bg-yellow-400" : "bg-gray-400"}`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform 
            ${dark ? "translate-x-6" : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
}
