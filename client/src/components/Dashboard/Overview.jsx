import React from 'react'

export default function Overview({ products, notAdmin }) {
    return (
        <>
            <div className="row text-center">
                <div className="col-md-3 d-flex flex-column justify-content-between">
                    <div className="p-2">
                        <i className="fas fa-user fa-3x mb-1"></i>
                        <h5>User</h5>
                        <h6>{notAdmin.length}</h6>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-between">
                    <div className="p-2">
                        <i className="fas fa-box fa-3x mb-1"></i>
                        <h5>Products</h5>
                        <h6>{products.length}</h6>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-between">
                    <div className="p-2">
                        <i className="fas fa-cash-register fa-3x mb-1"></i>
                        <h5>Transactions</h5>
                        <h6>{products.length}</h6>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-between">
                    <div className="p-2">
                        <i className="fas fa-chart-bar fa-3x mb-1"></i>
                        <h5>Visitors</h5>
                        <h6>{notAdmin.length}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
