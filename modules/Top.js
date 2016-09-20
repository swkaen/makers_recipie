/**
 * Created by swkaen on 西暦16/09/15.
 */
import React from 'react'
import styles from '../styles/toppage.css'
export default React.createClass({
    render(){
        return(
            <div className={styles.topPage}>
                <p>Maker's Recipe</p>
                {this.props.children}
            </div>
        )
    }
})