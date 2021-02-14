// Route visible to only unauthorized users

import React from 'react'
import { Route, Redirect}  from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const UnauthorizedRoute = (props) => {
    const { currentUser } = useAuth();

    return (
        <Route {...props}>
            {
                !currentUser ? props.children : <Redirect to="/" />
            }
        </Route>
    )
}

export default UnauthorizedRoute
