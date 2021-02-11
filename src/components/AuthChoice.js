import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AuthChoice = () => {
    const location = useLocation();

    return (
        <div className="w-full flex text-lg justify-between">
            <Link to="/signin" className="w-full">
                <button 
                    className={`border w-full p-3 rounded-tl-md 
                            ${location.pathname === '/signin' ? "bg-gray-200 hover:bg-gray-200" : "hover:bg-gray-50"}
                            focus:outline-none`}>
                    Sign In
                </button>
            </Link>
            <Link to="/signup" className="w-full">
                <button 
                    className={`border w-full p-3 rounded-tr-md 
                            ${ location.pathname === '/signup' ? "bg-gray-200 hover:bg-gray-200" : "hover:bg-gray-50" }
                            focus:outline-none`}>
                    Sign Up
                </button>
            </Link>
        </div>
    )
}

export default AuthChoice;
