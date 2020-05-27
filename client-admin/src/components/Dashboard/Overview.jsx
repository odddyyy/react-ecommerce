import React from 'react'

export default function Overview({ products, notAdmin }) {
    return (
        <>
            <div className="text-center text-white d-flex flex-row justify-content-around p-4" style={{background:'#ababab'}}>
                <div style={{width:'150px', height:'150px', background:'rgba(0,0,0,0.5)'}} className="p-4">
                    <i className="fas fa-user fa-3x mb-1"></i>
                    <h5>User</h5>
                    <h6>{notAdmin.length}</h6>
                </div>
                <div style={{width:'150px', height:'150px', background:'rgba(0,0,0,0.5)'}} className="p-4">
                    <i className="fas fa-box fa-3x mb-1"></i>
                    <h5>Products</h5>
                    <h6>{products.length}</h6>
                </div>
                <div style={{width:'150px', height:'150px', background:'rgba(0,0,0,0.5)'}} className="p-4">
                    <i className="fas fa-cash-register fa-3x mb-1"></i>
                    <h5>Transactions</h5>
                    <h6>{products.length}</h6>
                </div>
                <div style={{width:'150px', height:'150px', background:'rgba(0,0,0,0.5)'}} className="p-4">
                    <i className="fas fa-chart-bar fa-3x mb-1"></i>
                    <h5>Visitors</h5>
                    <h6>{notAdmin.length}</h6>
                </div>
            </div>
        </>
    )
}
