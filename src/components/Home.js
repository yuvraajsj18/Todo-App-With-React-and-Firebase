import React from 'react'
import { useAuth} from '../context/AuthContext'

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            <h1 className="text-center text-6xl mt-6 bg-clip-text text-transparent bg-gradient-to-r from-light-blue-500 via-blue-500 to-purple-800">
                Hello, { currentUser.email }
            </h1>
        </div>
    )
}

export default Home
