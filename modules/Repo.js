/**
 * Created by swkaen on 西暦16/09/10.
 */
import React from 'react'
export default React.createClass({
    render(){
        return(
            <div>
                <h1>{this.props.params.userName}</h1>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }

})