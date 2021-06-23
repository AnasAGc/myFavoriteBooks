
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button,Card} from "react-bootstrap";
class BestBooks extends React.Component {
  
  updateputton=(item,idx)=>{
    this.props.updateEditFlage()
    this.props.updateEditdata(item,idx)
    }
  
  render() {
    return (
      <div>
        {this.props.dataBooks.map((item,idx) => {
          return (
           
                <Card className="text-center" key={idx}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  {item.description}
                  </Card.Text>
                  <Button variant="primary"  onClick={()=>this.props.deletebook(idx)}>Delete</Button>
                  <Button variant="primary" onClick={()=>this.updateputton(item,idx)}>Update</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>

          );
        })}

      </div>
    );
  }
}

export default BestBooks;
