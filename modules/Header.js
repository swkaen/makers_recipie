/**
 * Created by swkaen on 西暦16/09/20.
 */
import React from 'react'
import styles from '../styles/header.css'
import NavLink from './NavLink'
export default React.createClass({
    render(){
        return(
            <div className={styles.headers}>
                <p id={styles.serviceName}>MR</p>
                <ul className={styles.nav}>
                    <li id={styles.userIcon} />
                    <li>LOG OUT</li>
                </ul>
            </div>
        )
    }
})