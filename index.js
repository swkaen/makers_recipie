import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repo from './modules/Repo'
import Repos from './modules/Repos'
import Home from './modules/Home'
import Form from './modules/Form'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/form" component={Form}/>
        </Route>
    </Router>
), document.getElementById('app'));