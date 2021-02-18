import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthChoice from './AuthChoice'
import signinIllustration from '../assets/images/signin.png';
import '../styles/authForms.css';

const Signin = () => {
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { signin } = useAuth();
    const history = useHistory();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");

        try {
            setLoading(true);
            await signin(email.current.value, password.current.value);
            history.push('/');
        } catch {
            setLoading(false);
            setError("Oops! Failed to sign in, please try again.");
        }
    };

    return (
        <div className="auth-form-container">
            <AuthChoice />

            <form className="auth-form" onSubmit={handleSignIn}>
                {
                    error &&
                    <div className="auth-form-error">
                        {error}
                    </div>
                }
                <div className="auth-form-control">
                    <label className="auth-form-label" htmlFor="id_email">Enter Your Email</label>
                    <input 
                        ref={email}
                        className="auth-form-input" 
                        type="email" name="email" id="id_email" 
                        placeholder="Email" required />
                </div>

                <div className="auth-form-control">
                    <label className="auth-label" htmlFor="id_password">Enter Your Password</label>
                    <input 
                        ref={password}
                        className="auth-form-input" 
                        type="password" name="password" id="id_password" 
                        placeholder="Password" required />
                </div>

                <button
                    disabled={loading} 
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
