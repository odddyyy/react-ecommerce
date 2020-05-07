import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
//actions
import { postProduct } from '../../store/actions/product-action'
import { useDispatch } from 'react-redux'

export default function AddProduct({ toggleModal, show }) {
    const dispatch = useDispatch()

    //local state
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    const handleClose = () => {
        toggleModal(false)
    }

    const addProduct = async (e) => {
        e.preventDefault()
        dispatch(postProduct(name, quantity, price, category, image))
        handleClose()
        clear()
    }

    const clear = () => {
        setImage('')
        setName('')
        setPrice('')
        setQuantity('')
        setImage('')
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={addProduct}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Product name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Quantity</label>
                        <input 
                            type="number" 
                            min='0'
                            className="form-control" 
                            placeholder="0" 
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Price</label>
                        <input 
                            type="number"
                            min='0'
                            className="form-control" 
                            placeholder="0" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Category</label>
                        <select class="custom-select" onChange={e => setCategory(e.target.value)}>
                            <option selected>Select Category</option>
                            <option value="Technology">Technology</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Foods">Foods</option>
                            <option value="Health">Health</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Image Url</label>
                        <input 
                            type="text"
                            className="form-control" 
                            value={image}
                            placeholder="Paste image url here"
                            onChange={e => setImage(e.target.value)}
                            required
                        />
                        <small>Click here to upload image using <a href="https://imgur.com/upload?beta" target="_blank">imgurl</a></small>
                    </div>
                    <button type="submit" className="btn btn-primary"><i className="fas fa-plus mr-2"></i>Add</button>
                </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
