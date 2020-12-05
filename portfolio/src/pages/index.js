import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle= {toggle}/>
            <HeroSection/>
            <Navbar toggle={toggle}/>
            <InfoSection {...homeObjOne}/>
            <Projects/>
            
            
            <Footer/>
        </>
    );
};

export default Home
