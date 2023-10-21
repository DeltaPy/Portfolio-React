import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer $isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle} smooth = {true} duration={800} spy={true} exact='true' offset={-80}> 
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle} smooth = {true} duration={800} spy={true} exact='true' offset={70}> 
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} smooth = {true} duration={800} spy={true} exact='true' offset={-80}> 
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} smooth = {true} duration={800} spy={true} exact='true' offset={-80}> 
                        Contacts
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
