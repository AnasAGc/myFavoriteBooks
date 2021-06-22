import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myFavoriteBooks.css";
import BestBooks from "./Component/BestBooks";
import BookFormModal from "./Component/BookFormModal";
class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  

  render() {


    return (
      <>
         <BestBooks dataBooks={this.props.dataBooks} deletebook={this.props.deletebook}/>
        </>
    );
  }
}

export default MyFavoriteBooks;
