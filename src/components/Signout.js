import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Signout = () => {
    const { signout } = useAuth();
    const history = useHistory();

    const handleSignOut = async (e) => {
        try {
            await signout();
            history.push('/signin');
        } catch {
            alert("Failed to Sign Out");
        }
    };

    return (
        <div>
            <button
                onClick={handleSignOut} 
                className="border hover:bg-gray-100 focus:outline-none text-gray-800 rounded px-3 py-1">
                Sign Out
            </button>   
        </div>
    )
}

export default Signout
