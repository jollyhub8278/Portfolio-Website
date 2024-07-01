import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/workExp";

function App() {
  return (
    <div >
      <Layout />
      <div className="container">
        <About />
        <Education/>
        <Techstack/>
        <Projects/>
        <WorkExp/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
