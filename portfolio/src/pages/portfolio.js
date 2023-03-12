import React from 'react';
import planner from '../images/dayplanner.png'
import weather from '../images/weather.png'
import quiz from '../images/quiz.png'
import notetaker from '../images/notetaker.png'
import Project from '../Project'

const Portfolio = () =>{
    const projects =[
        {
            repo:`https://github.com/byaylin/day-planner` ,
            url:`https://byaylin.github.io/day-planner/`,
            img: planner,
            alt: 'day planner'
            
        },
        {
            repo:`https://github.com/byaylin/gossip-girl-quiz` ,
            url:`https://byaylin.github.io/gossip-girl-quiz/`,
            img: quiz,
            alt: 'gossip girl quiz'
            
        },
        {
            repo: `https://github.com/byaylin/weather-dashboard`,
            url:`https://byaylin.github.io/weather-dashboard/`,
            img: weather,
            alt: 'weather dashboard'
            
        },
        {
            repo:`https://github.com/byaylin/note-taker` ,
            url:`https://amorales-note-taker.herokuapp.com/`,
            img: notetaker,
            alt: 'note taker app'
            
        }
    ]
    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <div className='allProjects'>
                {projects.map((project, index) => <Project project={project} index={index} key={index}/>)}
            </div>
        </div>
    )
}

export default Portfolio