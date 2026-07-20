import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';

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
    projects: [
      { name: "Expense Tracker", description: "Engineered a comprehensive financial management application designed to track user expenses and optimize personal budgeting workflows.", url: "https://github.com/Kscoder11/Expense_Tracker" },
      { name: "METIS-HIRE-2.0", description: "Developed an automated recruitment platform streamlining candidate evaluation and hiring processes for enterprise environments.", url: "https://github.com/Kscoder11/METIS-HIRE-2.0" },
      { name: "Autonomous Automation System", description: "Designed a sophisticated autonomous system leveraging Large Language Models to automate complex, multi-step operational tasks.", url: "https://github.com/Kscoder11/llm-based-autonomous-automation-system-" },
      { name: "Semester 1 CCP Project", description: "Implemented foundational computer science concepts in a structured academic project focusing on core programming paradigms.", url: "https://github.com/Kscoder11/SEM-1-project-ccp" },
      { name: "ITUE301 Student Portfolio", description: "Architected a responsive, dynamic professional portfolio utilizing React and modern front-end technologies to exhibit technical capabilities.", url: "https://github.com/Kscoder11/ITUE301-Student-Portfolio" }
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
            <Route path="/projects" element={<Projects projects={portfolioData.projects} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer name={portfolioData.name} socials={portfolioData.socials} />
      </div>
    </Router>
  );
}

export default App;
