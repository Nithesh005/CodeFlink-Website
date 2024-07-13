import './style.css'
import bannerImage from '../assets/bannerImage1.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Page2 from './Page2';
import { ContactusPAge } from './ContactusPAge';
import { OurProducts } from './OurProducts';

const Page1 = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <div className="sec" id='home'>
                <div className="bannerImage">
                    <div className="bnrText df fdc gap1r">
                        <div className="bannerText" data-aos="fade-right">
                            Transforming Ideas into Cutting-Edge IT Solutions
                        </div>
                        <p className='tac'>Empower Your Startup with Innovation and Expertise.</p>
                    </div>
                    <div className="imgbg">
                        <img src={bannerImage} alt="" width={500} data-aos="fade-in" data-aos-easing="ease-in-back" />
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