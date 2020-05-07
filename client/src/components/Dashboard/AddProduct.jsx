import React from 'react'
import { Modal } from 'react-bootstrap'

export default function AddProduct({ toggleModal, show }) {
    const handleClose = () => {
        toggleModal(false)
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        </div>
    )
}
