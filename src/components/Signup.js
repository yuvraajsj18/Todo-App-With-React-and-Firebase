import React from 'react'
import AuthChoice from './AuthChoice'

const Signup = () => {
    return (
        <div className="max-w-xs sm:max-w-md mx-auto mt-8">
            <AuthChoice />

            <form className="rounded-b-md p-3 border">
                <div className="mb-5 w-full">
                    <label className="pl-1" htmlFor="id_username">Enter Your Username</label>
                    <input 
                        className="p-2 mt-1 w-full border rounded" 
                        type="text" name="username" id="id_username" 
                        placeholder="Username" required />
                </div>

                <div className="mb-5 w-full">
                    <label className="pl-1" htmlFor="id_password">Enter Your Password</label>
                    <input 
                        className="p-2 mt-1 w-full border rounded" 
                        type="password" name="password" id="id_password" 
                        placeholder="Password" required />
                </div>

                <div className="mb-5 w-full">
                    <label className="pl-1" htmlFor="id_confirm_password">Confirm Your Password</label>
                    <input 
                        className="p-2 mt-1 border w-full rounded" 
                        type="password" name="confirm_password" id="id_confirm_password" 
                        placeholder="Confirm Password" required />
                </div>

                <button 
                    className="w-full p-2 border font-medium 
                            bg-gradient-to-r from-gray-300 to-gray-200 rounded 
                            hover:to-gray-400 hover:border-gray-300">
                    Create Your Account
                </button>
            </form>
        </div>
    )
}

export default Signup;
