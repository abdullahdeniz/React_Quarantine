import React from 'react';




class Button extends React.Component {
    render(){
        return(
            <div>
                <button onclick="activateLasers()">
                    Activer les lasers
                </button>
            </div>
        )
    }
}


export default Button;