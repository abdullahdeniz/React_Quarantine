import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FirstDay from './components/FirstDay';


class App extends React.Component{
  render () {
    return(
      <Router>
        <div>
          Quarantine Days
        </div>
      </Router>,
      <Route>

      </Route>,
      <Link>
      </Link>,
      <FirstDay/>
     
    )
    
  }
  
};




export default App;



