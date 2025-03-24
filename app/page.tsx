// Icons from "https://lucide.dev/"
// Images from "https://wallhaven.cc/", "https://pixabay.com/"
import Window from "@/components/system-ui/Window";

export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('/bgs/bg1.png')",
        opacity: 0.9,
      }}
    >
      <Window/>
    </div>
  );
}
