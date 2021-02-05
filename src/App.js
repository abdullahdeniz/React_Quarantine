import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Button from './components/Button';
import FirstDay from './components/FirstDay';


class App extends React.Component{
  render () {
    return(
      <Router>
        <div>
        </div>
      </Router>,
      <FirstDay/>,
      <Button/>
    )
  }
  
};




export default App;



