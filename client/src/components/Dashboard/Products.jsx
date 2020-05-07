import React, { useState } from 'react'
//modal component
import AddProduct from './AddProduct'
//helper
import { convertToRupiah } from '../../helpers/coverter'
//action
import { removeProduct } from '../../store/actions/product-action'
import { useDispatch } from 'react-redux'
//package
import Swal from 'sweetalert2'

export default function Products({ products }) {
    const dispatch = useDispatch()

    //local state
    const [show, setShow] = useState(false)

    const toggleModal = (condition) => {
        setShow(condition)
    }

    const deleteProduct = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if (result.value) dispatch(removeProduct(id))
    }

    return (
        <div>
          <button className="btn btn-primary" onClick={() => setShow(true)}><i className="fas fa-plus-square mr-2"></i>Product</button>
          <table className="table table-responsive mt-3">
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
                        <td>{convertToRupiah(product.price)}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} style={{widht:'30px', height:'30px'}}/></td>
                        <td colSpan="2">
                        <i className="fas fa-edit" style={{cursor:'pointer'}}></i>
                            <span onClick={() => deleteProduct(product.id)}><i className="fas fa-trash-alt ml-1" style={{cursor:'pointer'}} ></i></span>
                        </td>
                    </tr>
                ))}
              </tbody>
          </table>
          <AddProduct toggleModal={toggleModal} show={show}/>
        </div>
    )
}
