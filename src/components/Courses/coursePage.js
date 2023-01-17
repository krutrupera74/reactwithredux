import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseAction from '../../actions/courseAction';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ''
            }
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const newCourse = this.state.course;
        newCourse.title = event.target.value;
        this.setState({ course: newCourse });
    }

    onClickSave() {
        // alert(`Saving ${this.state.course.title}`);
        this.props.actions.createCourse(this.state.course);
    }

    printData(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>

                {this.props.as.map(this.printData)}

                <h2>Add Course</h2>

                <input type="text"
                    onChange={this.onTitleChange}
                    defaultValue={this.state.course.title} />

                <input type="submit"
                    onClick={this.onClickSave}
                    value="save" />

            </div>
        );
    }
}

CoursesPage.propTypes = {
    as: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        as: state.updatedCourses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);