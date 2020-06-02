import React, { Component} from 'react';
import './login-signup.css';
import axios from 'axios';
import { apiPath } from '../../env';
import Container from '../../components/container/container';

class SignupPage extends Component {
    state = {
        username: '',
        password: '',
    }

    handleInputs = (e) => {
        let data = e.target;

        this.setState({
            [data.name]: data.value
        })
    }

    postSignup = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        axios.post(`${apiPath}signup`, {username, password})
        .then(res => {
            if (res.status === 200) {
                console.log('signedup')
            }
        }) 
        .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="signin">
                <h4>Please sign up a new account</h4>
                <form className="form-group login">
                    <input className="form-control" 
                        name="username" 
                        type="username" 
                        placeholder="Enter username" 
                        onChange={this.handleInputs}/>
                   
                    <input className="form-control" 
                        name="password" 
                        type="password" 
                        id="signupPass"
                        placeholder="Password" 
                        onChange={this.handleInputs} />
                    <button className="btn btn-primary" onClick={this.postSignup}>Signup</button>
                </form>

            </div>
        )
    }
}

export default SignupPage;