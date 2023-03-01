import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
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
            <Contacts/>
            <Footer/>
        </>
    );
};

export default Home
