import React from "react";
import Header from "./header";
import Login from "./login";
import { withAuth0 } from "@auth0/auth0-react";
import Profile from "./Component/profile";
import axios from "axios";
import MyFavoriteBooks from "./myFavoriteBooks";
import BookFormModal from "./Component/BookFormModal";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModifyBookModal from "./Component/ModifyBookModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModal: false,
      editFlag: false,
      selectedItem: "",
      idx:'',
    };
  }

  getBook = () => {
    let email = this.props.auth0.user.email;
    // http://localhost:3016/book?email=anas19971114@gmail.com
    let url = `${process.env.REACT_APP_URl}/book?email=${email}`;
    axios.get(url).then((bookResult) => {
      let bookData = bookResult.data;
      // console.log(bookData); BECARFULL IT WILL DESTROY YOU COMPUTER
      this.setState({
        data: bookData,
      });
    });
  };

  updateModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  getBookDataFromForm = (event) => {
    event.preventDefault();
    const bookInfo2 = {
      name: event.target.book.value,
      description: event.target.des.value,
      status: event.target.Status.value,
      email: this.props.auth0.user.email,

    };
    // https://booksback.herokuapp.com/
    let url = `${process.env.REACT_APP_URl}/addbook`;
    axios.post(url, bookInfo2).then((result) => {
      this.setState({ data: result.data });
    });
  };

  deleteBook = (index) => {
    const userName = { email: this.props.auth0.user.email };
    let url = `${process.env.REACT_APP_URl}/deletebook/${index}`;

    // let result = await axios.delete(`http://localhost:3016/deletebook/${index}`,{ params: userName })
    // this.setState({
    //   data:result.data
    // })
    axios.delete(url, { params: userName }).then((result) => {
      this.setState({
        data: result.data,
      });
    });
  };
  updateEditFlage = () => {
    this.setState({
      editFlag: !this.state.editFlag,
    });
  };
  updateEditdata = (item,index) => {
    console.log(item,index);
    this.setState({
      selectedItem: item,
      idx:index,
    });
  };

  updateBook=(object)=>{
    // CHECkout The DATA BEFOR SEND IT 
    console.log(object);
    const objectsBooks = {
      name : object.name,
      description : object.description,
      status: object.status,
      email:this.props.auth0.user.email,
    }



  
    console.log(objectsBooks);
    
    let index=this.state.idx;
     let url = `${process.env.REACT_APP_URl}/updatebook/${index}`;
    // let url = `http://localhost:3016/updatebook/${index}`;
    axios.put(url,objectsBooks).then((result)=>{
      this.setState({
        data: result.data,
      });
    })

  }


  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated && this.getBook()}

        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <div>
                  <MyFavoriteBooks
                    updateEditdata={this.updateEditdata}
                    updateEditFlage={this.updateEditFlage}
                    dataBooks={this.state.data}
                    deletebook={this.deleteBook}
                  />

                  <BookFormModal
                    updatBook={this.updateModal}
                    flag={this.state.showModal}
                    bookInfo={this.getBookDataFromForm}
                  />
                  <ModifyBookModal
                    item={this.state.selectedItem}
                    updateEditFlage={this.updateEditFlage}
                    editflage={this.state.editFlag}
                    updateBook={this.updateBook}
                  />
                </div>
              ) : (
                <Login />
              )}
            </Route>

            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated ? <Profile /> : <Login />}
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
