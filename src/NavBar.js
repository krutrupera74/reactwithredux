import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Sep = () => <span> | </span>;
class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link> <Sep />
                <Link to="/company">Company</Link> <Sep />
                <Link to="/about">About</Link> <Sep />
                <Link to="/courses">Courses</Link> <Sep />
            </div>
        );
    }
}

export default NavBar;