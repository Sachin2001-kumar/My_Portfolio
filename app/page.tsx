import About from "./Components/About";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";


export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro/>
     <About/>
     <Skills/>
    </div>
  );
}
