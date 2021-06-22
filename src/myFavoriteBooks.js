import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myFavoriteBooks.css";
import BestBooks from "./Component/BestBooks";
import BookFormModal from "./Component/BookFormModal";
class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showModal:false,
    }
  }
  updateModal=()=>{
    this.setState({
      showModal:true,
    })
  }

  render() {


    return (
      <>
         <BestBooks dataBooks={this.props.dataBooks}/>
          <BookFormModal flag={this.state.showModal} updatBook={this.updateModal}/>
        </>
    );
  }
}

export default MyFavoriteBooks;
