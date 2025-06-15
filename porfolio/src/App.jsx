import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components//Skills';
// import Education from './components/Education';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      {/* <Education /> */}
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
