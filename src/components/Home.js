import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
    const { currentUser } = useAuth();

    useEffect(() => {
        const setName = async () => {
            await currentUser.updateProfile({
                displayName: "Username"
            });
        }

        setName();
    }); 

    return (
        <div>
            <h1 className="text-center text-3xl mt-6 bg-clip-text text-transparent bg-gradient-to-r from-light-blue-500 via-blue-500 to-purple-800">
                Hello, { currentUser.displayName }
            </h1>
        </div>
    )
}

export default Home
