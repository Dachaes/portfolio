"use client";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setActiveDock, resetActiveDock } from "../../store/slices/dockSlices";

import { useState, useEffect } from "react";
import styles from "./Dock.module.css";

const docks = [
  { name: "Home", icon: "/icons/house.png" },
  { name: "About", icon: "/icons/user-round.png" },
  { name: "History", icon: "/icons/hourglass.png" },
  { name: "Skills", icon: "/icons/code.png" },
  { name: "Projects", icon: "/icons/folder-git.png" },
];

export default function Dock() {
  const dispatch = useAppDispatch();
  const activeDock = useAppSelector((state) => state.dock.activeApp);

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const setDock = (dock: string) => dispatch(setActiveDock(dock));
  const resetDock = () => dispatch(resetActiveDock());

  

  return (
    <div
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => setIsHovered(false)}
      >

    {isHovered ? (
      <div 
        className="h-[75px] w-[400px] flex justify-center items-start fixed bottom-5 left-1/2 -translate-x-1/2 rounded-2xl px-1 py-3 z-50 backdrop-blur shadow-xl"
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.65)",
        }}>

        {docks.map((dock, index) => (
          <button
            key={dock.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (dock.name === "Home") {
                resetDock();
              } else {
                setDock(dock.name);
              }
            }}
            className={`mx-3 p-2 flex flex-col items-center bg-[#eeeeee] transition rounded-xl cursor-pointer
              ${ hoveredIndex === index ? "scale-111 translate-y-[-4px]" : "scale-100 translate-y-0" }
            `}
          >
            {/* 1. 이미지 */}
            <img
              src={dock.icon}
              alt={dock.name}
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
              {dock.name}
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

      ) : (

        <div
          className="h-[30px] w-[200px] flex justify-center items-center fixed bottom-5 left-1/2 -translate-x-1/2 rounded-2xl px-1 py-3 z-50 backdrop-blur shadow-xl cursor-pointer"
          style={{
          backgroundColor: "rgba(10, 10, 10, 0.65)",
        }}
        >
          <img
            src="/icons/chevron-up.png"
            alt="docks"
            className={`w-8 h-7 filter invert ${styles.bounce}`}
          />
        </div>
      )}
    </div>
  );
}
