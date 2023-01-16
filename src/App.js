import React, { Component, Fragment } from 'react';
import './App.css';
import Loadable from 'react-loadable';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function Loading() {
  return <h1>Loading ....</h1>
}

const SomeComponent = Loadable({
  loader: () => import('./components/SomeComponent'),
  loading: Loading
});

const AddUser = Loadable({
  loader: () => import('./components/AddUser'),
  loading: Loading
});

const Settings = Loadable({
  loader: () => import('./components/Settings'),
  loading: Loading
});


class App extends Component {
  state = {
    showComponent: false
  };

  handleClick = () => {
    this.setState({
      showComponent: true
    });
  }

  render() {
    return(
      <Router>
        <div>
          <Link to="/">Dashboard</Link>
          <div>
            |
          </div>
          <Link to="/settings">Settings</Link>
          <div>
            |
          </div>
          <Link to="/add-user">Add User</Link>
          <div>
            |
          </div>
          <Link to="/somecomp">Some Component</Link>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/settings" component={Settings} />
            <Route path="/add-user" component={AddUser} />
            <Route path="/somecomp" component={SomeComponent} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
