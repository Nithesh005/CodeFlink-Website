import './style.css'
import bannerImage from '../assets/des.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Page2 from './Page2';
import { ContactusPAge } from './ContactusPAge';
import { OurProducts } from './OurProducts';
import MagneticEffect from '../componets/MagneticEffect';

const Page1 = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const text =" IT Solutions";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index < text.length) {
          const timeout = setTimeout(() => {
            setDisplayedText(displayedText + text[index]);
            setIndex(index + 1);
          }, 100); 
          return () => clearTimeout(timeout);
        }
      }, [index, text, displayedText]);
    return (
        <>
            <div className="sec" id='home'>
                <div className="bannerImage">
                    <div className="bnrText df fdc gap1r">
                        <div className="bannerText" data-aos="fade-right">
                        Transforming Ideas into Cutting-Edge  
                        { displayedText}
                        </div>
                        <p className='tac'>Empower Your Startup with Innovation and Expertise.</p>
                    </div>
                    <div className="imgbg">
                    <MagneticEffect src={bannerImage} alt="Magnetic Effect Image" width={500} />
                        {/* <img src={bannerImage} alt="" width={500} data-aos="fade-in" data-aos-easing="ease-in-back" /> */}
                    </div>
                </div>
            </div>
            <OurProducts />
            <Page2 />
            <ContactusPAge />
        </>
    )
}

export default Page1;