
import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contract/Contract';
import Certificates from './components/Certificates/Certificates';
function App() {
 

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero/>
        <Skills />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </div>
        
    </>
  )
}

export default App
