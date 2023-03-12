import React from 'react'
import photo from '../images/aylin.jpeg';

export default function About(){
    return(
        <main>
            <img src={photo} alt='aylin' className='profile'></img>
            <p id='bio'> 
                Welcome to my portfolio! I graduated from Concorde College with a Practical Nursing Diploma. Throught my nursing career, I have worked directly with patients as well as in an ambulatory setting. My interest and passion for coding is what brought me to enroll in the University of Washington's Coding Bootcamp. Upon completing this program, I hope to gain new skills and continue to learn. 
            </p>
        </main>
    )
};