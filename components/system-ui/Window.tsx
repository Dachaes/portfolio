"use client";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { setActiveDock, resetActiveDock } from "../../store/slices/dockSlices";

import WindowLayout from "@/components/system-ui/WindowLayout";
import AboutMe from "@/components/window/About-me";
import History from "@/components/window/History";
import Skills from "@/components/window/Skills";
import Projects from "@/components/window/Projects";

export default function Window() {
  const dispatch = useAppDispatch();
  const activeDock = useAppSelector((state) => state.dock.activeApp);

  const components: Record<string, React.ReactNode> = {
    "About": <AboutMe />,
    "History": <History />,
    "Skills": <Skills />,
    "Projects": <Projects />,
  };

  return (
    <div className="w-[95%] h-[90%] transform-y-0">
      <WindowLayout>
        { activeDock? (
          components[activeDock]
        ) : (
          <div></div>
        )}
      </WindowLayout>
    </div>
  );
}
