/**
 * Created by swkaen on 西暦16/09/08.
 */
import React from 'react'
import NavLink from './NavLink'
export default React.createClass({
    render(){
        return(
            <div>
                <h1>Welcome to Maker's recipe!</h1>
                <button type="button">Register</button>
                <button type="button">Login</button>
            </div>
        )
    }
})