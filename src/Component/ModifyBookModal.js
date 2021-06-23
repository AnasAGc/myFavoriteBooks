import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export class ModifyBookModal extends Component {
  editdata = (e) => {
    e.preventDefault();

    let object = {
      name: e.target.book.value,
      description: e.target.des.value,
      status: e.target.EditStatus.value,
    };
    console.log(object);
    this.props.updateBook(object);
  };

  render() {
    return (
      <div>
        <Modal show={this.props.editflage} onHide={this.props.updateEditFlage}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {"this.props.title1 "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.editdata(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Edit Book Name"
                  name="book"
                  defaultValue={this.props.item.name}
                />
                <Form.Text className="text-muted">
                  Pleas add your book.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Edit Description"
                  name="des"
                  defaultValue={this.props.item.description}
                  onChange={"(e)=>this.editdescription(e)"}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  name="EditStatus"
                  defaultValue={this.props.item.status}
                >
                  <option value="lifeChanging">Life Changing </option>
                  <option value="favoriteFive">Favorite Five</option>
                  <option value="recommendedtoMe">Recommended to Me </option>
                </Form.Control>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={this.props.updateEditFlage}
              >
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
export default ModifyBookModal;
