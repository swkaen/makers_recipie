/**
 * Created by swkaen on 西暦16/09/15.
 */
import React from 'react'
import { browserHistory } from 'react-router'
import styles from '../styles/signuporin.css'

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
            <div className={styles.topButtons}>
                <button type="button" className={styles.defaultButton} id={styles.register} onClick={this.onClickRegisterButton}>利用開始</button>
                <button type="button" className={styles.defaultButton} id={styles.login} onClick={this.onClickLoginButton}>ログイン</button>
            </div>
        )
    }
})