import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import FirstDay from './components/FirstDay';
import Button from './components/Button';

// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render () {
    return(
  
        <div>
          <FirstDay/>
          <Button/>
            
          
        </div>
  
      
    )
  }
  
};




export default App;



