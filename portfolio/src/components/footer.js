import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

export default function Footer(){
    return(
        <footer>
            <a href='https://github.com/byaylin' target='_blank' rel='noreferrer'>
                <img src={github} alt='github logo'></img>
            </a>
            <a href='https://twitter.com/ByAylinMorales' target='_blank' rel='noreferrer'>
                <img src={twitter} alt='twitter logo'></img>
            </a>
            <a href='www.linkedin.com/in/aylin-morales' target='_blank' rel='noreferrer'>
                <img src={linkedin} alt='linkedin logo'></img>
            </a>
        </footer>
    )
}