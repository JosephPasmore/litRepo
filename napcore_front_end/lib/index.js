import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();