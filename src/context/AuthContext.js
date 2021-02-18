import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubsribe;
    }, []);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const signout = () => {
        return auth.signOut();
    } 

    const value = {
        currentUser,
        signup,
        signin,
        signout,
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && props.children }
        </AuthContext.Provider>
    )
}
