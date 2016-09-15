/**
 * Created by swkaen on 西暦16/09/15.
 */
import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
    contextTypes: {
    router: React.PropTypes.object
    },
    onClickRegisterButton(){
        const path = '/register';
        this.context.router.push(path);
    },
    onClickLoginButton(){
        const path = '/login';
        this.context.router.push(path);
    },
    render(){
        return(
            <div>
                <button type="button" onClick={this.onClickRegisterButton}>Register</button>
                <button type="button" onClick={this.onClickLoginButton}>Login</button>
            </div>
        )
    }
})