import './App.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

import Home from './pages/Home';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Home />
  );
}

export default App;
