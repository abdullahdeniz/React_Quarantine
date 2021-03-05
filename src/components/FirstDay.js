import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';




class FirstDay extends React.Component{
    render () {
        return (
            <Router>
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