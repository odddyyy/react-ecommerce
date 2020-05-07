import React, { useState } from 'react'
import Logo from '../img/logo.png'
//component import
import LoginForm from '../components/Login/LoginForm'
import RegisterForm from '../components/Login/RegisterForm'

export default function Login() {
    
    const [login, setLogin] = useState(true)

    const toogle = (condition) => {
        setLogin(condition)
    }
    return (
        <div style={styles.container}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={styles.colStyle}>
                        <img src={Logo} style={styles.imgStyle} alt="logo"/>
                    </div>
                    {login ? <LoginForm toogle={toogle}/> : <RegisterForm toogle={toogle}/>}
                </div>
            </div>
        </div>
    )
}

const styles = {
    container:{
        background:'#e7ebcc',
        minHeight:'100vh'
    },
    colStyle : {
    },
    imgStyle : {
        marginLeft:'10%',
        width:'350px', 
        height:'350px'
    }
}