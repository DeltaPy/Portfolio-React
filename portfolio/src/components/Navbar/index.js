import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= window.innerHeight) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>dev.Denis</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                        <NavItem>
                            <NavLinks to="home"
                                smooth = {true} duration={500} spy={true} exact='true' offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                                smooth = {true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio"
                                smooth = {true} duration={500} spy={true} exact='true' offset={-80}
                            >Portfolio</NavLinks>
                            </NavItem>
                        <NavItem>
                        <NavLinks to="contact"
                                smooth = {true} duration={500} spy={true} exact='true' offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
export default Navbar;