import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Tasks from './pages/Tasks';

function App() {
  const portfolioData = {
    name: "Krish",
    gitId: "Kscoder11",
    title: "Software Developer & Computer Science Student",
    description: "I am a dedicated software developer focused on engineering scalable, efficient, and user-centric applications. GitHub ID: @Kscoder11. I am consistently expanding my technical expertise, with a particular emphasis on Software Engineering, Artificial Intelligence, and Machine Learning.",
    skills: [
      { name: "Python", icon: "PY" },
      { name: "Artificial Intelligence", icon: "AI" },
      { name: "Machine Learning", icon: "ML" },
      { name: "React", icon: "RE" },
      { name: "JavaScript", icon: "JS" },
      { name: "CSS3 / HTML5", icon: "UI" },
      { name: "Node.js", icon: "ND" },
      { name: "Git", icon: "VC" }
    ],

    socials: [
      { platform: "GitHub", link: "https://github.com/Kscoder11" },
      { platform: "LinkedIn", link: "https://linkedin.com" },
      { platform: "Twitter", link: "https://twitter.com" }
    ]
  };

  return (
    <Router>
      <div className="container">
        <Header name={portfolioData.name} title={portfolioData.title} />
        <main>
          <Routes>
            <Route path="/" element={
              <About 
                name={portfolioData.name} 
                title={portfolioData.title} 
                description={portfolioData.description} 
              />
            } />
            <Route path="/skills" element={<Skills skills={portfolioData.skills} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
        <Footer name={portfolioData.name} socials={portfolioData.socials} />
      </div>
    </Router>
  );
}

export default App;
