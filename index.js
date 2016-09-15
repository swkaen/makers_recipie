import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repo from './modules/Repo'
import Repos from './modules/Repos'
import Form from './modules/Form'
import Register from './modules/Register'
import Login from './modules/Login'
import Top from './modules/Top'
import SignUporIn from './modules/SignUporIn'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

render((
    <Router history={hashHistory}>
        
        <Route path="/" component={Top}>
            <IndexRoute component={SignUporIn}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
        </Route>
       
        <Route path="/dashboard" component={App}>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/form" component={Form}/>
            
        </Route>
    </Router>
), document.getElementById('app'));