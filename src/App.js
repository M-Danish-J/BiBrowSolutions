import './App.css';
// import AboutUs from './components/About/AboutUs';
import 'aos/dist/aos.css'; 
import AOS from 'aos';// Add this line

// import Section from './components/Home/Section';
import Home from './pages/Home';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=''>
      <Home />
      {/* <Section /> */}
      {/* <AboutUs/> */}
    </div>
  );
}

export default App;
