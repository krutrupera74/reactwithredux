import React from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom/client";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { loadCourse } from './actions/courseAction';

const store = configureStore();
store.dispatch(loadCourse());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store} >
    <App />
</Provider>);