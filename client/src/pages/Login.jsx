import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Logo from '../img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loggingIn } from '../store/actions/user-action'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
const SERVER_URL = 'http://localhost:3001'

export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    //local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const doLogin = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${SERVER_URL}/user/login`,
                data: {
                    email,
                    password
                }
            })
            dispatch(loggingIn(data))
            history.push('/dashboard')
        } catch (err) {
            Swal.fire({
                icon:'warning',
                titleText: err.response.data
            })
        }
    }

    return (
        <div className="container" style={{height:'100vh'}}>
            <h1 className="login-text">Admin Content Management System</h1>
            <div className="row">
                <div className="col-6 mr-auto login bg-light">
                    <Form onSubmit={doLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                        </Form.Group>
                        <Button variant="outline-dark" type="submit" className="mt-4">
                            <i className="fas fa-sign-in-alt"></i> Login
                        </Button>
                    </Form>
                </div>
                <div className="col-6 bg-light login">
                    <img src={Logo} style={{width:'50%', marginLeft:'25vh'}} alt="warunglocal.png"/>
                </div>
            </div>
        </div>
    )
}
