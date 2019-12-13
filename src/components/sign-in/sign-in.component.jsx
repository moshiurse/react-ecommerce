import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({[name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>Signin with your email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="Email" handleChange={this.handleChange} value={this.state.email} required/>

                    <FormInput type="password" label="Password" handleChange={this.handleChange} value={this.state.password} required/>

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;