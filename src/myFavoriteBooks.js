import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myFavoriteBooks.css";
import Carousel from "react-bootstrap/Carousel";
import BestBooks from "./Component/BestBooks";

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      // <Carousel>
      //   {this.props.dataBooks.map((item) => {
      //     return (
           
      //       <Carousel.Item>
      //         <img
      //           className="d-block w-100"
      //           src={`${item.url} slide&bg=373940`}
      //           alt="First slide"
      //         />
      //         <Carousel.Caption>
      //           <h3>{item.name}</h3>
      //           <p>{item.description} </p>
      //         </Carousel.Caption>
      //       </Carousel.Item>
      //     );
      //   })}
      // </Carousel>
      <BestBooks dataBooks={this.props.dataBooks}/>
    );
  }
}

export default MyFavoriteBooks;
