import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myFavoriteBooks.css";
import BestBooks from "./Component/BestBooks";

class MyFavoriteBooks extends React.Component {
  render() {
    return (

      <BestBooks dataBooks={this.props.dataBooks}/>
    );
  }
}

export default MyFavoriteBooks;
