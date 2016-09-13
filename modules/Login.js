/**
 * Created by swkaen on 西暦16/09/13.
 */
import React from 'react'

export default React.createClass({

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
            success:function () {
                console.log('success');
            }.bind(this),
            error:function(xhr, status, err) {
                this.setState({user_name: user_name, password:password});
                console.error(status, err.toString());
            }.bind(this)
        });
        this.setState({user_name:'', password:''});
    },
    render(){
        return (<form className="emailForm" onSubmit={this.handleSubmit}>
                <p>
                    <input type="text"
                       placeholder="Your name"
                       maxLength='10'
                       value={this.state.user_name}
                       onChange={this.handleUser_nameChange}/>
                </p>
                <p>
                    <input type="password"
                       placeholder="password"
                       name="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}/>
                    <input type="submit" value="Login"/>
                </p>
            </form>
        )
    }
})