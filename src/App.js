import './App.css';
import AboutUs from './components/About/AboutUs';
import Section from './components/Home/Section';
import Home from './pages/Home';
function App() {
  return (
    <div className='mb-[100vh]'>
      <Home />
      <Section />
      {/* <AboutUs/> */}
    </div>
  );
}

export default App;
