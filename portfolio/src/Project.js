import React from 'react';
import './css/portfolio.css'

export default function Project(props) {
  return (
    <div className="container text-center">
      <div className="card">
        <img id="projectimg" className="card-img-top" src={props.images}/>
        <div id="projectname" className="card-body">
          <a href={props.link} target={"_blank"} className="btn btn-primary">
            {props.name}</a>
            <a href={props.repo} target={"_blank"} className="btn btn-primary" id="project-repo">click here for repo </a>
        </div>
      </div>
    </div>
  );
}