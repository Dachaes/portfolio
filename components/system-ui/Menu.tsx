"use client";
import { useEffect, useState } from "react";

export default function Menu() {
  const [volumeLevel, setVolumeLevel] = useState(0);
  const volumeIcons = [
    "/icons/volume-x.png",
    "/icons/volume-1.png",
    "/icons/volume-2.png",
  ];

  const [time, setTime] = useState(getCurrentTime());

  // 볼륨 관련
  const handleVolumeClick = () => {
    setVolumeLevel((volumeLevel) => (volumeLevel + 1) % volumeIcons.length);
  };

  // 시간 관련
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div>
      <div
        className="w-full flex items-center justify-between fixed top-0 left-0 h-9 px-4 text-[#eeeeee] text-sm z-50"
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.65)",
         }}
      >
        {/* 왼쪽 메뉴 */}
        <div className="flex gap-5 items-center">
        <img src="/icons/moon-star.png" alt="logo" className="w-5 h-5 filter invert" />
          <span>Sohyeon's Portfolio</span>
          <a
            href="https://github.com/dachaes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github
          </a>

          <a
            href="https://dachaes.notion.site/SoHyeon-s-DevLogs-Web-164a555139848077852de0fce34b6c82?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Notion
          </a>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="flex gap-4 items-center">
          <img src="/icons/battery-full.png" alt="battery" className="w-5 h-5 filter invert" />
          <img
            src={volumeIcons[volumeLevel]}
            alt="volume"
            className="w-5 h-5 filter invert cursor-pointer"
            onClick={handleVolumeClick}
          />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
