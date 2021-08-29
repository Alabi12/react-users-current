import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { connect } from 'react-redux'
import { deleteUser } from '../actions/userActions'
import Modal from "react-bootstrap/Modal";
import EditUserForm from "./EditUserForm";

const User = ({ user, deleteUser, editUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    deleteUser(user.id);
  };
  return (
    <>
      <div className="user">
        <Card className="mb-4">
          <Card.Header>{user.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Gen: {user.gen}</ListGroup.Item>
            <button className="btn btn-primary" onClick={handleShow}>
              Edit
            </button>
            <button className="btn btn-default" onClick={handleDelete}>
              Delete
            </button>
          </ListGroup>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            user={user}
            editUser={editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapDispatchToProps = {
  deleteUser
}

export default connect(null,mapDispatchToProps)(User);