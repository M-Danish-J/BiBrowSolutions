import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Home from './pages/Home';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
