import './App.css';
import About from './components/about';
import Experience from './components/experience';
import Header from './components/header';
import Intro from './components/intro';
import Contact from './components/contact';
import Background from './components/background';
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Background />
      <Contact />
    </div>
  );
}

export default App;
