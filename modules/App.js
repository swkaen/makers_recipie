import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'
import Header from './Header'
import $ from 'jquery'
import Home from './Home'

export default React.createClass({
    
  render() {
    return(
        <div>
            <Header imgref="../media/images/kaen_ra.png"/>
            {/*<ul role="nav">
                <li><NavLink to ="/repos" activeClassName="active">Repos</NavLink></li>
                <li><NavLink to ="/post"  activeClassName="active">Post</NavLink></li>
            </ul>*/}
            {this.props.children}
        </div>
    )
  }
})
