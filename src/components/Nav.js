import React from 'react'
import Signout from './Signout'
import PrivateRoute, {} from './routes/PrivateRoute'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="p-4 flex justify-between items-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-light-blue-500 to-light-blue-400">
                <Link className="cursor-pointer" to="/">Todo App</Link>
            </div>
            <PrivateRoute path="/">
                <Signout />
            </PrivateRoute>
        </nav>
    )
}

export default Nav;
