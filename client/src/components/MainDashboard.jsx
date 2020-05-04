import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/product-action'
import ProductCard from './Products'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default function MainDashboard() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)

    useEffect(() => {
        dispatch(getProducts())
    },[])

    return (
        <div className="main-wrapper">
            <div className="product-container">
                <h3>Product List</h3>
                <ListGroup horizontal style={{fontWeight:'bolder', textAlign:'left'}}>
                    <ListGroupItem style={{width:'250px'}}>Name</ListGroupItem>
                    <ListGroupItem style={{width:'200px'}}>Price</ListGroupItem>
                    <ListGroupItem style={{width:'100px'}}>Quantity</ListGroupItem>
                    <ListGroupItem style={{width:'100px'}}>Image</ListGroupItem>
                    <ListGroupItem style={{width:'150px'}}>Category</ListGroupItem>
                </ListGroup>
                {products.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    )
}
