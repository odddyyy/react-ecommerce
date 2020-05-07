import React, { useState } from 'react'
//modal component
import AddProduct from './AddProduct'

export default function Products({ products }) {
    const [show, setShow] = useState(false)

    const toggleModal = (condition) => {
        setShow(condition)
    }

    return (
        <div>
          <button className="btn btn-primary" onClick={() => setShow(true)}><i className="fas fa-plus-square mr-2"></i>Product</button>
          <table className="table mt-3">
              <thead>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Image</th>
              </thead>
              <tbody>
                {products.map(product => (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} style={{widht:'30px', height:'30px'}}/></td>
                        <td colSpan="2">
                        <i class="fas fa-edit" style={{cursor:'pointer'}}></i>
                        <i class="fas fa-trash-alt ml-3" style={{cursor:'pointer'}}></i>
                        </td>
                    </tr>
                ))}
              </tbody>
          </table>
          <AddProduct toggleModal={toggleModal} show={show}/>
        </div>
    )
}
