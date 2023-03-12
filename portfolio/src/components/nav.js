import React from 'react'
import { Navlink } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
        <Navlink to="/react-portfolio" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            About Me
        </Navlink>

         <Navlink to="/react-portfolio/portfolio" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            Portfolio
        </Navlink>
        <Navlink to="/react-portfolio/contact" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            Contact
        </Navlink>
        <Navlink to="/react-portfolio/resume" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            Resume
        </Navlink>
        </nav>
    )
};
