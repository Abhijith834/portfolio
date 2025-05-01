import BackgroundTriangles from './components/BackgroundTriangles';
import Header from './components/Header';
import Intro from './components/Intro';
import TechEduSection from "./components/TechEduSection";
import useScrollGlow from "./hooks/useScrollGlow";
import ProjectsSection from './components/ProjectsSection';

function App() {
  // useScrollGlow();
  return (
    <div>
      <Header />
      <BackgroundTriangles />
      <Intro />
      <TechEduSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
