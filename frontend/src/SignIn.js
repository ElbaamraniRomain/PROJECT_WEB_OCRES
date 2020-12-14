import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'

class SignIn extends Component{
    state = {
        email: '',
        password:''
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value
        })
    }
    handlSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.email === "admin@gmail.com" && this.state.password === "admin"){
            console.log('ok')
            return  <Redirect to ={this.state.redirect}/>
        }
        }
    render(){
        return(
            <div className = "container">
                <form onSubmit={this.handlSubmit} className="login">
                    <h5 className="grey-text text-darken-3">Admin logIn page</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id = "email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id = "password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn