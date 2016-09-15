/**
 * Created by swkaen on 西暦16/09/15.
 */
import React from 'react'
export default React.createClass({
    render(){
        return(
            <div>
                <h1>Welcome to Maker's recipe!</h1>
                {this.props.children}
            </div>
        )
    }
})