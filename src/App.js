import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js"
import LandingPage from './components/LandingPage';
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
      <LandingPage />
    </div>
  );
}

export default App;
