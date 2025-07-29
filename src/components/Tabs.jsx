import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex border-b dark:border-gray-700 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-6 py-3 font-semibold relative transition-colors ${
  active === index
    ? "text-[var(--canvas-purple)] dark:text-[var(--canvas-purple)] border-b-4 border-[var(--canvas-purple)]"
    : "text-gray-500 dark:text-gray-300 hover:text-[var(--canvas-purple)]"
}`}

          >
            {tab.label}
            {active === index && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[var(--canvas-purple)] rounded-t-lg transition-all"></span>
            )}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
