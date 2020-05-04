import React from 'react'
import Logo from '../img/logo.png'

export default function Sidenav() {
    return (
        <div className="side-nav">
            <img src={Logo} alt="warunglocal.png"/>
            <div className="nav-text">
                <h4><i className="fas fa-plus" style={{marginRight:'10px'}}></i>  Add Product</h4>
                <h4><i className="fas fa-plus" style={{marginRight:'10px'}}></i>  Add Banner</h4>
                <div className="btn-logout">
                    <h4><i className="fas fa-sign-out-alt" style={{marginRight:'10px'}}></i>   Logout</h4>
                </div>
            </div>
        </div>
    )
}
