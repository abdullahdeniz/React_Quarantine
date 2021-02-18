import React from 'react';



class Form extends React.Component{
    render(){
        return (
            <div>
                <p>Premier Core</p>
            </div>,
            <div>
                <form>
                    <label>
                    Name :
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        )
    }
};

export default Form;