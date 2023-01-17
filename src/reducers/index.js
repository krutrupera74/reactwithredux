import { combineReducers } from 'redux';
import updatedCourses from './courseReducer';

const rootReducer = combineReducers({
   updatedCourses
});

export default rootReducer;