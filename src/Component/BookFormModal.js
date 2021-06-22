import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
export class BookFormModal extends Component {
    
    render() {
      return (
        <div>
            <button type="submit" onClick={this.props.updatBook}>Add Book</button>

            <Modal show={this.props.flag} onHide={this.props.updatBook}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {this.props.title1}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={this.props.bookInfo}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Book Name" name="book"/>
            <Form.Text className="text-muted">
              Pleas add your book.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description </Form.Label>
            <Form.Control type="text" placeholder="Description" name="des" />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" custom name="Status">
              <option value="lifeChanging">Life Changing </option>
              <option value="favoriteFive">Favorite Five</option>
              <option value="recommendedtoMe">Recommended to Me </option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.props.updatBook}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.close}>Close</Button> */}
      </Modal.Footer>
    </Modal>
                   
        </div>
    )
    }
}
export default BookFormModal