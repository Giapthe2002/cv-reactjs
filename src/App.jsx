import Certifications from "./components/Section/Certifications";
import Education from "./components/Section/Education";
import Extracurriculars from "./components/Section/Extracurriculars";
import Intro from "./components/Section/Intro";
import Projects from "./components/Section/Projects";
import Research from "./components/Section/Research";
import Skills from "./components/Section/Skills";
import ShootingStars from "./components/ShootingStar";

function App() {
  return (
    <div className="">
      <ShootingStars />

      <div className="w-[850px] mb-[100px] border-1 border-gray-300 px-16 py-12 bg-white mx-auto">
        <Intro />
        <Education />
        <Projects />
        <Skills />
        <Research />
        <Extracurriculars />
        <Certifications />
      </div>
    </div>
  );
}

export default App;
