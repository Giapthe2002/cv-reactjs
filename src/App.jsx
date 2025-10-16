import Education from "./components/Section/Education";
import Extracurriculars from "./components/Section/Extracurriculars";
import Intro from "./components/Section/Intro";
import Projects from "./components/Section/Projects";
import Research from "./components/Section/Research";
import Skills from "./components/Section/Skills";

function App() {
  return (
    <div className="w-[800px] mb-[100px]">
      <Intro />
      <Education />
      <Projects />
      <Skills />
      <Research />
      <Extracurriculars />
    </div>
  );
}

export default App;
