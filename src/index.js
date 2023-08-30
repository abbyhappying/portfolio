import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// find html id root, This is where your React application will be mounted.
const root = document.querySelector('#root');

// render the component into the root element
ReactDOM.render(<App />, root);
