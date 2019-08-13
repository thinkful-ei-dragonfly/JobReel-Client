import React from 'react';
import { Route } from 'react-router';
import Landing from '../../routes/Landing/Landing'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route 
          exact path="/"
          component={Landing}
        />
      </div>
    );
  }
}

export default App;
