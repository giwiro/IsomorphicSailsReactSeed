import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from "react-router";

import routes from './routes.jsx'

ReactDOM.render(<Router history={browserHistory}>{routes(window.__ReactInitState__)}</Router>, window.document.getElementById('main'));