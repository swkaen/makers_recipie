/**
 * Created by swkaen on 西暦16/09/15.
 */
import React from 'react'
import styles from '../styles/topage.css'
export default React.createClass({
    render(){
        return(
            <div className={styles.topPage}>
                <h1>Welcome to Maker's recipe!</h1>
                {this.props.children}
            </div>
        )
    }
})