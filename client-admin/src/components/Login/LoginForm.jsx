import React, { useState } from 'react'
import { Login } from '../../hooks/login-register'
//login action
import { loggingIn } from '../../store/actions/user-action'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function LoginForm({ toogle }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async e => {
        e.preventDefault()
        const result = await Login(email, password)
        if (result) {
            dispatch(loggingIn(result))
            setEmail('')
            setPassword('')
        }
        history.push('/dashboard')
    }
    return (
        <div className="col-md-6" style={{margin:'auto'}}>
            <form onSubmit={login}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt mr-2"></i>Login</button>
                <div className="mt-2">
                    <small>Don't have an account ? Register <span onClick={() => toogle(false)} style={styles.links}>here</span></small>
                </div>
            </form>
        </div>
    )
}

const styles = {
    links: {color:'blue', cursor:'pointer', textDecoration:'underline'}
}
