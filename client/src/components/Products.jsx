import React from 'react'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { convertToRupiah } from '../helpers/coverter'

export default function Products({ product }) {
    return (
        <ListGroup horizontal>
            <ListGroupItem style={{width:'250px'}}>{product.name}</ListGroupItem>
            <ListGroupItem style={{width:'200px'}}>{convertToRupiah(product.price)}</ListGroupItem>
            <ListGroupItem style={{width:'100px'}}>{product.quantity}</ListGroupItem>
            <ListGroupItem style={{width:'100px'}}><img src={product.image} style={{width:'50px', height:'50px'}} /></ListGroupItem>
            <ListGroupItem style={{width:'150px'}}>{product.category}</ListGroupItem>
            <i className="fas fa-edit" style={styles.icons}></i>
            <i className="fas fa-trash-alt" style={styles.icons}></i>
        </ListGroup>
    )
}

const styles = {
    icons: {
        position:'relative',
        marginLeft:'10px', 
        marginTop:'23px', 
        cursor:'pointer'
    }
}