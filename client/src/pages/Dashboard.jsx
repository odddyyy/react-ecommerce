import React, { useEffect } from 'react'
import Sidenav from '../components/Sidenav'
import { useHistory } from 'react-router-dom'

export default function Main() {
    const history = useHistory()
    if (!localStorage.token) history.push('/')

    
    return (
        <div>
            <Sidenav />
        </div>
    )
}
