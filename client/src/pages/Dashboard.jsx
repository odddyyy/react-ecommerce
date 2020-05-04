import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Sidenav from '../components/Sidenav'
import MainDahsboard from '../components/MainDashboard'


export default function Dashboard() {
    const history = useHistory()
    // if (!localStorage.token) history.push('/')

    useEffect(() => {

    },[])
    
    return (
        <div className="main-container">
            <Sidenav />
            <MainDahsboard />
        </div>
    )
}
