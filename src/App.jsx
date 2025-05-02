import React, { useState } from "react";
import BackgroundTriangles from "./components/BackgroundTriangles";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TechEduSection from "./components/TechEduSection";
import useScrollGlow from "./hooks/useScrollGlow";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactWindow from "./components/ContactWindow";
import ResumeWindow from "./components/ResumeWindow";

function App() {
  // useScrollGlow();
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
      <div id="home" />
      <Header
        onContactClick={() => setShowContact(true)}
        onResumeClick={() => setShowResume(true)}
      />
      <BackgroundTriangles />
      <Intro />
      <TechEduSection />
      <ProjectsSection />
      <Footer />
      <ContactWindow open={showContact} onClose={() => setShowContact(false)} />
      <ResumeWindow open={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}

export default App;
