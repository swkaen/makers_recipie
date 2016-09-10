/**
 * Created by swkaen on 西暦16/09/08.
 */
import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
    render(){
        return (
            <div>
                <h2>Repo2</h2>
                <ul>
                    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">Router</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})