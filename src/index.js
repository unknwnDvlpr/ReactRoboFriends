import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; // father of all components
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


// The ReactDOM package uses the render function to render the App.js file and target the id 'root'
ReactDOM.render(
	<App /> , document.getElementById('root'));
registerServiceWorker();