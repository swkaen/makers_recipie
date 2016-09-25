/**
 * Created by swkaen on 西暦16/09/13.
 */
import React from 'react'
import $ from 'jquery'
import { browserHistory } from 'react-router';
import styles from '../styles/form.css';

export default React.createClass({
    contextTypes: {
    router: React.PropTypes.object.isRequired
    },
    getInitialState(){
      return {user_name:'', password:''}
    },
    handleUser_nameChange(e){
     this.setState({user_name:e.target.value});
    },
    handlePasswordChange(e){
        this.setState({password:e.target.value});
    },
    handleSubmit(e){
        e.preventDefault();
        var user_name  = this.state.user_name.trim();
        var password  = this.state.password.trim();

        if(!user_name || !password){
            return;
        }
        var data = {user_name: user_name, password:password};

        $.ajax({
            url:'http://localhost:5000/api/login',
            dataType:'json',
            type:'POST',
            data:data,
            success:function (data) {
                var login_status = data[0]['login_status'];
                console.log(login_status);
                if(login_status === true){
                    this.context.router.push('/app');
                }
            }.bind(this),
            error:function(xhr, status, err) {
                this.setState({user_name: user_name, password:password});
                console.error(status, err.toString());
            }.bind(this)
        });
        this.setState({user_name:'', password:''});
    },
    render(){
        return (
            <form className={styles.forms} onSubmit={this.handleSubmit}>
                    <input id={styles.nameBox}
                           className={styles.inputBox}
                           type="text"
                       placeholder="ユーザーネーム"
                       maxLength='16'
                       value={this.state.user_name}
                       onChange={this.handleUser_nameChange}/>
                    <input id={styles.passwordBox}
                           className={styles.inputBox}
                           type="password"
                       placeholder="パスワード"
                       name="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}/>
                    <input id={styles.submitButton} type="submit" value="ログイン"/>
            </form>
        )
    }
})