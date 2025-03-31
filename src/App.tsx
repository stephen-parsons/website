import { useState } from "react";
import Chess from "./Chess";
import MusicPlayer from "./MusicPlayer";
import Header from "./Header";
import Title from "./Title";
import About from "./About";
import Experience from "./Experience";
import Personal from "./Personal";

export type SectionLink = "About" | "Experience" | "Projects" | "Personal";

export default function App() {
  const [currentLink, setCurrentLink] = useState<SectionLink>("About");

  return (
    <>
      <Header setSelectedLink={setCurrentLink} currentLink={currentLink} />
      <main className="main-content">
        <Title />
        {currentLink === "About" && <About />}
        {currentLink === "Experience" && <Experience />}
        {currentLink === "Personal" && <Personal />}
      </main>
    </>
  );
}
