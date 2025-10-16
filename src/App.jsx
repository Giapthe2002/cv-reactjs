import Certifications from "./components/Section/Certifications";
import Education from "./components/Section/Education";
import Extracurriculars from "./components/Section/Extracurriculars";
import Intro from "./components/Section/Intro";
import Projects from "./components/Section/Projects";
import Research from "./components/Section/Research";
import Skills from "./components/Section/Skills";

function App() {
  return (
    <div className="w-[850px] mb-[100px] border-1 border-gray-300 px-16 py-12">
      <Intro />
      <Education />
      <Projects />
      <Skills />
      <Research />
      <Extracurriculars />
      <Certifications />
    </div>
  );
}

export default App;
