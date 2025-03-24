"use client";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { setActiveDock, resetActiveDock } from "../../store/slices/dockSlices";

import WindowLayout from "@/components/system-ui/WindowLayout";

export default function Window() {
  const dispatch = useAppDispatch();
  const activeDock = useAppSelector((state) => state.dock.activeApp);

  return (
    <div className="w-[95%] h-[90%] transform-y-0">
      <WindowLayout>
        <p>내용</p>
      </WindowLayout>
    </div>
  );
}
