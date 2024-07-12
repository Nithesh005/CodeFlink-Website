import { useEffect, useRef } from 'react';
import './App.css';
import Section from './pages/Page1';
import AOS from "aos";
import "aos/dist/aos.css";
import './Lib/style.css'
import Head_nav_Bar from './Suporting_Components/Head_nav_Bar';
import Page2 from './pages/Page2';
import { Routes, Route } from 'react-router-dom';
import AppAppBar from './Suporting_Components/AppAppBar';
import FooterComponet from './componets/FooterComponet';
import MDBFooterComponent from './componets/FooterComponet';
import Footer from './componets/FooterComponet';


function App() {
  const lastScroll = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const appbar = document.getElementsByClassName('appbar')[0];
      if (scrollTop > lastScroll.current) {
        appbar.style.top = '-70px';
      } else {
        appbar.style.top = '0';
      }
      lastScroll.current = scrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className='App'>
      {/* <Head_nav_Bar /> */}
      <AppAppBar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/about" element={<Page2 />} />
      </Routes>
      <Footer />
      

    </div>
  );
}

export default App;
