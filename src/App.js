import logo from './logo.svg';
import './App.css';
import './Navbar.css'
import './hero.css'
import './skills.css'
import Navbar from './component/Navbar';
import Hero from './component/hero';
import Skills from './component/skills';
import Progressbar from './chip/progressbar'

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Progressbar/>
    </div>
  );
}

export default App;
