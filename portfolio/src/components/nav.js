import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
        <NavLink to="/react-portfolio" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            About Me
        </NavLink>
         <NavLink to="/react-portfolio/portfolio" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            Portfolio
        </NavLink>
        <NavLink to="/react-portfolio/contact" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            Contact Me 
        </NavLink>
        <NavLink to="/react-portfolio/resume" exact="true" className={(navData) =>(navData.isActive ? 'navbar-link active' : 'nav-link' )}>
            Resume
        </NavLink>
        </nav>
    )
};
