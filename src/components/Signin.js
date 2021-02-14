import React from 'react'
import AuthChoice from './AuthChoice'
import signinIllustration from '../assets/images/signin.png';
import '../styles/authForms.css';

const Signin = () => {
    return (
        <div className="auth-form-container">
            <AuthChoice />

            <form className="auth-form">
                <div className="auth-form-control">
                    <label className="auth-form-label" htmlFor="id_username">Enter Your Username</label>
                    <input 
                        className="auth-form-input" 
                        type="text" name="username" id="id_username" 
                        placeholder="Username" required />
                </div>

                <div className="auth-form-control">
                    <label className="auth-label" htmlFor="id_password">Enter Your Password</label>
                    <input 
                        className="auth-form-input" 
                        type="password" name="password" id="id_password" 
                        placeholder="Password" required />
                </div>

                <button 
                    className="auth-form-button">
                    Sign In Now
                </button>
            </form>

            <div className="">
                <img src={signinIllustration} alt="Sign in illustration"/>
            </div>
        </div>
    )
}

export default Signin;
