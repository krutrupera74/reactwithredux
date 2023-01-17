import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ''
            }
        }
    }
    printData(course, index) {
        return <div key={index}>{course.title}</div>
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {this.props.coursesprops.map(this.printData)}
            </div>
        )
    }
}

Home.propTypes = {
    coursesprops: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
    return {
        coursesprops: state.updatedCourses
    }
}

export default connect(mapStateToProps)(Home);