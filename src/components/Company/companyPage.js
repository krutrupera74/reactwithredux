import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CompanyPage extends Component {
    render() {
        return (
            <div className="jumbotorn">
                <h1>Company Page</h1>
                <p>React with Redux</p>
                <Link to='/about' className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        )
    }
}

export default CompanyPage;