import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'
import $ from 'jquery'
import Home from './Home'

export default React.createClass({
    
  render() {
    return(
        <div>
            <h1>Maker's Recipe</h1>
            <ul role="nav">
                <li><NavLink to ="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to ="/repos" activeClassName="active">Repos</NavLink></li>
                <li><NavLink to ="/form"  activeClassName="active">Form</NavLink></li>
                <li><NavLink to ="/">Logout</NavLink></li>
            </ul>
            {this.props.children}
        </div>
    )
  }
})
