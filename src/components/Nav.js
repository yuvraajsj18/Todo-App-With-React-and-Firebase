import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="border-blue-gray-700 p-4">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-light-blue-500 to-light-blue-300">
                <Link className="cursor-pointer" to="/">Todo App</Link>
            </div>
        </nav>
    )
}

export default Nav;
