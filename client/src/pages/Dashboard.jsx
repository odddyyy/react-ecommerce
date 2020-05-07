import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
//action import
import { getProducts } from '../store/actions/product-action'
import { getAllUser, loggingOut } from '../store/actions/user-action'
//components import
import Overview from '../components/Dashboard/Overview'
import Products from '../components/Dashboard/Products'
import User from '../components/Dashboard/User'

export default function Dashboard() {
    const dispatch = useDispatch()
    const history = useHistory()
    if (!localStorage.token) history.push('/')
    //global state
    const products = useSelector(state => state.productReducer.products)
    const users = useSelector(state => state.userReducer.users)
    //local state
    const [toggle, setToggle] = useState(0)

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getAllUser())
    },[])

    const notAdmin = users.filter(i => {
        return !i.admin
    })

    const logout = () => {
        dispatch(loggingOut())
        history.push('/')
    }

    return (
        <div>
            <div className="nav nav-bar text-dark" style={{background:'#ababab', height:'80px'}}>
                <h3 className="mt-4"><i className="fas fa-cogs mr-2 ml-2"></i>Dashboard</h3>
                <div className="ml-auto text-danger logout" onClick={logout}>
                    <h5 className="mt-4 mr-3"><i className="fas fa-sign-out-alt mr-1"></i>Logout</h5>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group" style={{cursor:'pointer'}}>
                            <a className={toggle === 0 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => setToggle(0)}><i className="fas fa-cog mr-2"></i>Overview</a>
                            <a className={toggle === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => setToggle(1)}><i className="fas fa-box mr-2"></i>Products</a>
                            <a className={toggle === 2 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => setToggle(2)}><i className="fas fa-user mr-2"></i>Users</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {toggle === 0 && <Overview products={products} notAdmin={notAdmin}/>}
                        {toggle === 1 && <Products products={products}/>}
                        {toggle === 2 && <User notAdmin={notAdmin}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
