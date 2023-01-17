import React, { Component } from 'react';
import { BrowserRouter as RouterOutlet, Route, Switch } from 'react-router-dom';
import AboutPage from './components/About/aboutPage';
import CompanyPage from './components/Company/companyPage';
import CoursePage from './components/Courses/coursePage';
import Home from './components/home';
import NavBar from './NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <RouterOutlet>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/company" component={CompanyPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursePage} />
          </Switch>
        </div>
      </RouterOutlet>
    )
  }
}

export default App;
