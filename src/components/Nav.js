import React from 'react'
import Signout from './Signout'
import PrivateRoute from './routes/PrivateRoute'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Nav = () => {
    const { currentUser } = useAuth();

    const getUserFirstName = (name) => name.split(" ")[0];

    return (
        <nav className="p-4 flex justify-between items-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-light-blue-500 to-light-blue-400">
                <Link className="cursor-pointer" to="/">Todo App</Link>
            </div>

            <PrivateRoute path="/">
                <div className="flex items-center">
                    <span className="mr-3 text-gray-800 cursor-default">
                        { getUserFirstName(currentUser?.displayName ?? "")}
                    </span>
                    <Signout />
                </div>
            </PrivateRoute>
        </nav>
    )
}

export default Nav;
