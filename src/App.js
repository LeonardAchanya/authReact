import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import AuthProvider from './components/Authprovider/Authprovider';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Menu/Home/Home';
import Profile from './components/Menu/Profile/Profile';
import Settings from './components/Menu/Settings/Settings';
import Login from './components/Menu/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (

      <AuthProvider>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Settings}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/" exact render={Home} />
          <Route render={()=> <h1>Not Found</h1>} />
        </Switch>
      </div>
      </AuthProvider>

    );
  }
}

export default App;
