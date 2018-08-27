import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Signup from './components/Signup/';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import ResetPassword from './components/ResetPassword';
import WithEdit from './components/WithEdit';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
            <Route exact path ="/" component={Signup} />
            <Route path="/login" component={Login}/>
            <Route path="/app" component={App}/>
            <Route path="/resetpassword" component={ResetPassword}/>
            </Switch>
        </div>
    </Router>
    
    , document.getElementById('root')
);
registerServiceWorker();
