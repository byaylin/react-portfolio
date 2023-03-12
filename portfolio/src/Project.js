import React from 'React';
import githublogo from '../src/images/github.png';

export default function Project(props) {
    return(
        <figure>
            <img src={props.img} alt={props.img} className="card-img">
                <a href={props.link} className="pLink" target="_blank" rel="noreferrer">
                    <b>{props.name}</b>
                </a>
                <a href={props.repo} className="pRepo" target="_blank" rel="noreferrer">
                    <img src={githublogo} alt="repo" className="card-logo" />
                </a>
            </img>
         </figure>
    )
}