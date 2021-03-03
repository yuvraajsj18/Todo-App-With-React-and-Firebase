import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthChoice from './AuthChoice'
import { ImSpinner2 } from 'react-icons/im'
import todo_illustration from '../assets/images/todo.png'
import '../styles/authForms.css';

const Signup = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const [error, setError] = useState("");

    const history = useHistory();
    const { isAuthenticated, signup } = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }

        document.title = "Todo App | Sign Up";
    });

    const handleSignUp = async (e) => {
        e.preventDefault();

        setError("");
        
        if (password.current.value !== confirmPassword.current.value) {
            setError("Passwords Do Not Match");
            return;
        }

        if (password.current.value.length < 6) {
            setError("Password should be atleast 6 characters long.");
            return;
        }

        try {
            setLoading(true);
            await signup(email.current.value, password.current.value, name.current.value);
            history.push('/');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }

    };

    return (
        <div className="auth-form-container">
            <AuthChoice />

            <form className="auth-form" onSubmit={handleSignUp}>
                {
                    error &&
                    <div className="auth-form-error">
                        {error}
                    </div>
                }

                <div className="auth-form-control">
                    <label className="auth-form-label" htmlFor="id_name">Enter Your Name</label>
                    <input 
                        ref={name}
                        className="auth-form-input" 
                        type="text" name="name" id="id_name" 
                        placeholder="Name" required />
                </div>

                <div className="auth-form-control">
                    <label className="auth-form-label" htmlFor="id_email">Enter Your Email</label>
                    <input 
                        ref={email}
                        className="auth-form-input" 
                        type="email" name="email" id="id_email" 
                        placeholder="Email" required />
                </div>

                <div className="auth-form-control">
                    <label className="auth-form-label" htmlFor="id_password">Enter Your Password</label>
                    <input 
                        ref={password}
                        className="auth-form-input" 
                        type="password" name="password" id="id_password" 
                        placeholder="Password" required />
                </div>

                <div className="auth-form-control">
                    <label className="auth-form-label" htmlFor="id_confirm_password">Confirm Your Password</label>
                    <input 
                        ref={confirmPassword}
                        className="auth-form-input" 
                        type="password" name="confirm_password" id="id_confirm_password" 
                        placeholder="Confirm Password" required />
                </div>

                <button 
                    disabled={loading}
                    className="auth-form-button">
                    Create Your Account
                </button>
                
                {   loading &&
                    <div className="auth-form-loading">
                        <span>Signing you in</span>
                        <ImSpinner2 className="auth-form-loading-svg" />
                    </div>
                }
            </form>

            <div className="">
               <img src={todo_illustration} alt="Todo illustration"/>
            </div>
        </div>
    )
}

export default Signup;
