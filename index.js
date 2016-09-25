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
import PostForm from './modules/PostForm'
import DashBoard from './modules/DashBoard'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

render((
    <Router history={hashHistory}>

        {/*トップページ*/}
        <Route path="/" component={Top}>
            <IndexRoute component={SignUporIn}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
        </Route>

        {/*メインページ*/}
        <Route path="/app" component={App}>
            <IndexRoute component={DashBoard}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/post" component={PostForm}/>
        </Route>

    </Router>

), document.getElementById('app'));