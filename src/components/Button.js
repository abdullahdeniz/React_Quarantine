import React from 'react';




class Button extends React.Component {
    render(){
        return(
            <div>
                <button onclick="activateLasers()">
                    Click !
                </button>
            </div>
        )
    }
}


export default Button;