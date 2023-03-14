import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import planner from '../images/dayplanner.png'
import weather from '../images/weather.png'
import quiz from '../images/quiz.png'
import notetaker from '../images/notetaker.png'
import Project from '../Project'
import '../css/portfolio.css'

const projects =[
    {
        id: 1,
        repo:`https://github.com/byaylin/day-planner` ,
        url:`https://byaylin.github.io/day-planner/`,
        img: planner,
        alt: 'day planner',
        name: 'day planner' 
    },
    {
        id: 2,
        repo:`https://github.com/byaylin/gossip-girl-quiz` ,
        url:`https://byaylin.github.io/gossip-girl-quiz/`,
        img: quiz,
        alt: 'gossip girl quiz',
        name: 'gossip girl quiz'
    },           
    {
        id: 3,
        repo: `https://github.com/byaylin/weather-dashboard`,
        url:`https://byaylin.github.io/weather-dashboard/`,
        img: weather,
        alt: 'weather dashboard',
        name: 'weather dashboard'
    },
    {
        id: 4,
        repo:`https://github.com/byaylin/note-taker` ,
        url:`https://amorales-note-taker.herokuapp.com/`,
        img: notetaker,
        alt: 'note taker app',
        name: 'note taker app'
    }    
]

export default function Portfolio(){
    return (
        <Container className='portfolio'>
        <Row sm={2}>
            {projects.map(projects =>
                <Col>
                <Project id={projects.id} name={projects.name} link={projects.url} images={projects.img}></Project>
                </Col>)}
        </Row>
    </Container>
    )
}