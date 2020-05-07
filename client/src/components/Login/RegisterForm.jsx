import React, { useState } from 'react'
import { Register } from '../../hooks/login-register'
//login action
import { loggingIn } from '../../store/actions/user-action'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function RegisterForm({ toogle }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [superPassword, setSuperPassword] = useState('')

    const register = async e => {
        e.preventDefault()
        const result = await Register(name, email, password, superPassword)
        if (result) {
            dispatch(loggingIn(result))
            setEmail('')
            setPassword('')
        }
    }
    return (
        <div className="col-md-6" style={{margin:'auto'}}>
            <form onSubmit={register}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label for="exampleInputPassword1">Super password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Super password"
                        value={superPassword}
                        onChange={e => setSuperPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fas fa-user-plus mr-2"></i>Register</button>
                <div className="mt-2">
                    <small>Have an account ? Login <span onClick={() => toogle(true)} style={styles.links}>here</span></small>
                </div>
            </form>
        </div>
    )
}

const styles = {
    links: {color:'blue', cursor:'pointer', textDecoration:'underline'}
}