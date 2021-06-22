import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

export class BookFormModal extends Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={this.props.updatBook}>
          Add Book
        </button>
        <Modal show={this.props.flag} onHide={""}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.title1}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.close}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default BookFormModal;
