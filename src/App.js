import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from "react-particles-js"
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Particles 
      className="particles-canvas"
      params={{
        particles :{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke: {
              width: 6,
              color:"#f9ab00"
            }
          }
        }
        
      }}

      />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
