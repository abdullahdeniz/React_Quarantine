import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';




class FirstDay extends React.Component{
    render () {
        return (
            <Router>
                <div className="header" style= {{display: "flex", flexDirection: "row", listStyleType: "none"}}>
                    <nav class="nav-bar">
                        <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./About.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./Skill.html">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./Projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./Contact.html">Contact</a>
                        </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h1>Hello My Blog in React</h1>
                    <p>I want do</p>
                </div>

                <div className=" col-md-8 mb-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-beetween">
                            <h4 className="d-inline"> yaz </h4>
                            
                            <i className = "far fa-trash-alt" style = {{cursor : "pointer"}}>myke</i>
                        </div>
                </div>
                
                </div>
            </Router>
            
        )
    }
};

export default FirstDay;