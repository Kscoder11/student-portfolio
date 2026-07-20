import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const portfolioData = {
    name: "Alex Developer",
    title: "Software Engineer & Creative Coder",
    description: "I build interactive, accessible, and high-performance web experiences. Combining technical expertise with an eye for design to create products that people love.",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "💛" },
      { name: "CSS3 / HTML5", icon: "🎨" },
      { name: "Node.js", icon: "🟢" },
      { name: "UI/UX Design", icon: "✨" },
      { name: "Git", icon: "🔧" }
    ],
    socials: [
      { platform: "GitHub", link: "https://github.com" },
      { platform: "LinkedIn", link: "https://linkedin.com" },
      { platform: "Twitter", link: "https://twitter.com" }
    ]
  };

  return (
    <div className="container">
      <Header name={portfolioData.name} title={portfolioData.title} />
      <main>
        <About 
          name={portfolioData.name} 
          title={portfolioData.title} 
          description={portfolioData.description} 
        />
        <Skills skills={portfolioData.skills} />
      </main>
      <Footer name={portfolioData.name} socials={portfolioData.socials} />
    </div>
  );
}

export default App;
