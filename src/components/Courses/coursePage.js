import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseAction from '../../actions/courseAction';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
    }

    printData(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>

                {this.props.coursesprops.map(this.printData)}

            </div>
        );
    }
}

CoursesPage.propTypes = {
    coursesprops: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        coursesprops: state.updatedCourses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);