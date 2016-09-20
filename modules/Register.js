/**
 * Created by swkaen on 西暦16/09/12.
 */
import React from 'react'
import $ from 'jquery'
import styles from '../styles/form.css';
export default React.createClass({

    getInitialState(){
      return {user_name:'', email:'', password:''}
    },
    handleUser_nameChange(e){
     this.setState({user_name:e.target.value});
    },
    handleEmailChange(e){
     this.setState({email:e.target.value});
    },
    handlePasswordChange(e){
        this.setState({password:e.target.value});
    },
    
    handleSubmit(e){
        e.preventDefault();
        var email = this.state.email.trim();
        var user_name  = this.state.user_name.trim();
        var password  = this.state.password.trim();

        if(!email || !user_name || !password){
            return;
        }
        var data = {user_name: user_name, email: email, password:password};

        $.ajax({
            url:'http://localhost:5000/api/register',
            dataType:'json',
            type:'POST',
            data:data,
            success:function () {
                console.log('success');
            }.bind(this),
            error:function(xhr, status, err) {
                this.setState({user_name: user_name, email: email, password:password});
                console.error(status, err.toString());
            }.bind(this)
        });
        this.setState({user_name:'', email:'', password:''});
    },
    render(){
        return(
            <form className={styles.forms} onSubmit={this.handleSubmit}>
                <input id={styles.nameBox}
                       className={styles.inputBox} type="text"
                       placeholder="ユーザーネーム"
                       maxLength='16'
                       value={this.state.user_name}
                       onChange={this.handleUser_nameChange}/>
                <input id={styles.emailBox}
                       className={styles.inputBox} type="email"
                       placeholder="メールアドレス"
                       name="email"
                       value={this.state.email}
                       onChange={this.handleEmailChange}/>
                <input id={styles.passwordBox}
                       className={styles.inputBox} type="password"
                       placeholder="パスワード"
                       name="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}/>

                <input id={styles.submitButton} type="submit" value="登録"/>
            </form>
        )
    }
})