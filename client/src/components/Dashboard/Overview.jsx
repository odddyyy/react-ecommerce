import React from 'react'

export default function Overview({ products, notAdmin }) {
    return (
        <>
            <h3 className="text-center">Overviews</h3>
            <div className="row text-center">
                <div className="col-md-6 mt-2">
                    <i className="fas fa-box fa-4x mb-1"></i>
                    <h5>Total Products</h5>
                    <h6>{products.length}</h6>
                </div>
                <div className="col-md-6 mt-2">
                    <i className="fas fa-user fa-4x mb-1"></i>
                    <h5>Total User</h5>
                    <h6>{notAdmin.length}</h6>
                </div>
            </div>
        </>
    )
}
