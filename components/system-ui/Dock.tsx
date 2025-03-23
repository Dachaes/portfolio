"use client";

import { useState } from "react";

const apps = [
  { name: "Me", icon: "/icons/house.png" },
  { name: "History", icon: "/icons/hourglass.png" },
  { name: "Skills", icon: "/icons/code.png" },
  { name: "Projects", icon: "/icons/folder-git.png" },
];

export default function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className="flex items-end fixed bottom-5 left-1/2 -translate-x-1/2 rounded-2xl px-1 py-3 z-50 backdrop-blur shadow-xl"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.65)",
      }}>

      {apps.map((app, index) => (
        <button
          key={app.name}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`mx-3 p-2 flex flex-col items-center bg-[#eeeeee] transition rounded-xl
            ${ hoveredIndex === index ? "scale-111 translate-y-[-4px]" : "scale-100 translate-y-0" }
          `}
        >
          {/* 1. 이미지 */}
          <img
            src={app.icon}
            alt={app.name}
            className="w-8 h-8 object-contain"
          />

          {/* 2. 툴팁 */}
          <span
            className={`w-13 px-1 py-[2px] absolute -top-8 rounded-sm text-[#cccccc] text-xs pointer-events-none 
              ${ hoveredIndex === index ? "opacity-100" : "opacity-0" }
            `}
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.65)",
            }}
            >
            {app.name}
            <span
              className="absolute left-1/2 -bottom-[4px] -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "4px solid transparent",
                borderRight: "4px solid transparent",
                borderTop: "4px solid rgba(10, 10, 10, 0.65)",
              }}
            />
          </span>
        </button>
      ))}

    </div>
  );
}
