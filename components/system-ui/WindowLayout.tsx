"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setActiveDock, resetActiveDock } from "../../store/slices/dockSlices";

import styles from "./WindowLayout.module.css";

export default function WindowLayout({ children }: { children: React.ReactNode; }) {
  const dispatch = useAppDispatch();
  const activeDock = useAppSelector((state) => state.dock.activeApp);
  const [dock, setDock] = useState(activeDock);
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    if (activeDock == null)
      setIsWindow(false);
    else
      setIsWindow(true);

    setTimeout(() => {
      setDock(activeDock);
    }, 200);
  }, [activeDock]);


  const docks = [
    { name: "About", icon: "/icons/user-round.png", link: "https://sohyeon-portfolio/about-me/"},
    { name: "History", icon: "/icons/hourglass.png", link: "https://sohyeon-portfolio/history/" },
    { name: "Skills", icon: "/icons/code.png", link: "https://sohyeon-portfolio/skills/" },
    { name: "Projects", icon: "/icons/folder-git.png", link: "https://sohyeon-portfolio/projects/" },
  ];
  const icon = docks.find((dock) => dock.name === activeDock)?.icon;
  const link = docks.find((dock) => dock.name === activeDock)?.link;


  // 윈도우 창 닫기
  const handleClose = () => {
    dispatch(resetActiveDock());
  };

  return (
    <div>
      {dock ? (
      <div 
        key={ activeDock }
        className={`w-full h-full rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-[#1e1e1e] ${isWindow ? styles.popUp : styles.popDown} {
        }`}
      >
        {/* 윈도우 바깥 단 */}
        <div className="flex items-center justify-between h-9 px-4 bg-[#51516e]">
          {/* 좌 - 탭*/}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />

            <div
              className="mx-3 px-5 py-1 w-50 h-8 translate-y-[4px] 
              flex items-center gap-2 rounded-t-2xl 
              bg-[#dddddd] text-[#111111] cursor-pointer"
            >
              <img
                src={ icon }
                alt={ dock }
                className="w-4 h-4 object-contain"
              />
              <span className="text-[15px]">{ activeDock }</span>
            </div>
          </div>

          {/* 우 - x */}
          <div>
            <button
              onClick={handleClose}
              className="cursor-pointer transition hover:rotate-180"
              >
              <img
                src="/icons/x.png"
                alt="close"
                className="w-5 h-5 object-contain filter invert"
              />
            </button>
          </div>
        </div>


        {/* 주소 단 */}
        <div className="w-full px-2 h-8 flex items-center gap-2 bg-[#dddddd]">
          <img
            src="/icons/arrow-left.png"
            alt="back"
            className="w-4 h-4 object-contain"
          />
          <img
            src="/icons/arrow-right.png"
            alt="forward"
            className="w-4 h-4 object-contain"
          />
          <img
            src="/icons/rotate-ccw.png"
            alt="refresh"
            className="w-4 h-4 object-contain filter scale-x-[-1]"
          />
          <div className="w-full mx-1 h-7 px-4 flex items-center gap-2 rounded-xl bg-[#eeeeee] border border-gray-300">
            <p className="text-[14px]">{link}</p>
          </div>
          <img
            src="/icons/ellipsis-vertical.png"
            alt="plus"
            className="w-4 h-4 object-contain"
          />
        </div>


        {/* 윈도우 안 단 */}
        <div className="p-4 h-150 bg-[#eeeeee] text-[#111111]">
          {children}
        </div>
      </div>

      ) : (

        <div></div>
      )}
    </div>
  );
}
