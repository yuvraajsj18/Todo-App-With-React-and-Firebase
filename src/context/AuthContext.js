import React, { useState, useEffect, useContext } from 'react';
import { auth, googleAuthProvider } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setIsAuthenticated(Boolean(currentUser));
            setLoading(false);
        });

        return () => {
            unsubsribe();
            setIsAuthenticated(Boolean(currentUser));
        }
    });

    const signup = async (email, password, displayName) => {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        if (userCredential != null) {
            return userCredential.user.updateProfile({
                displayName,
            });
        }
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const signInWithGoogle = () => {
        return auth.signInWithPopup(googleAuthProvider);
    }

    const signout = () => {
        return auth.signOut();
    } 

    const value = {
        currentUser,
        signup,
        signin,
        signInWithGoogle,
        signout,
        isAuthenticated,
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && props.children }
        </AuthContext.Provider>
    )
}
