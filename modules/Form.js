/**
 * Created by swkaen on 西暦16/09/10.
 */
import React from 'react'
import $ from 'jquery'


export default React.createClass({
    
    getInitialState(){
      return {author:'', message:''}
    },
    handleAuthorChange(e){
     this.setState({author:e.target.value});
    },
    handleMessageChange(e){
     this.setState({message:e.target.value});
    },
    handleSubmit(e){
        e.preventDefault();
        var message = this.state.message.trim();
        var author  = this.state.author.trim();

        if(!message || !author){
            return;
        }
        var data = {author: author, message: message};

        $.ajax({
            url:'http://localhost:5000/api/test',
            dataType:'json',
            type:'POST',
            data:data,
            success:function () {
                console.log('success');
            }.bind(this),
            error:function(xhr, status, err) {
                this.setState({author: author, message: message});
                console.error(status, err.toString());
            }.bind(this)
        });
        this.setState({author:'', message:''});
    },
    render(){
        return(
            <form className="messageForm" onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="Your name"
                       maxLength='10'
                       value={this.state.author}
                       onChange={this.handleAuthorChange}/>

                <input type="email"
                       placeholder="xxxxx@example.com"
                       name="email"
                       value={this.state.message}
                       onChange={this.handleMessageChange}/>
                <input type="submit" value="send"/>
            </form>
        )
    }
})