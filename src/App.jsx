import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProjectList from './Components/ProjectList';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="projects">
        <ProjectList />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <Contact />
    </div>
  );
}

export default App;