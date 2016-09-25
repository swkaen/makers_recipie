/**
 * Created by swkaen on 西暦16/09/20.
 */
import React from 'react'
import styles from '../styles/header.css'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    onClickPostArticleButton(){
        const path = '/post';
        this.context.router.push(path);
    },
    onClickLogo(){
        const path = '/app';
        this.context.router.push(path);
    },
    render(){
        return(
            <div className={styles.headers}>
                <div className={styles.headerInner}>
                     <div className={styles.headerLeft}>
                         <div className={styles.headerLogo} >
                             <a onClick={this.onClickLogo}>
                                 <span id={styles.headerLogoMain}>MR</span>
                             </a>
                         </div>
                     </div>
                    <div className={styles.headerRight}>
                        <button className={styles.headerPostArticleButton} onClick={this.onClickPostArticleButton}>
                            POST
                        </button>
                        <div className={styles.headerUserOpen}>
                            <a className={styles.headerUesrClickable}>
                                <div className={styles.headerIcon}></div>
                            </a>
                        </div>
                        <div className={styles.headerLogout}>
                            <a href="/">ABOUT</a>
                        </div>
                        <div className={styles.headerLogout}>
                            <a href="/">LOG OUT</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})