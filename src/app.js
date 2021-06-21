import React from "react";
import Header from "./header";
import Login from "./login";
import { withAuth0 } from "@auth0/auth0-react";
import Profile from "./Component/profile";
import axios from "axios";

// import IsLoadingAndError from './IsLoadingAndError';
import MyFavoriteBooks from "./myFavoriteBooks";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      data:[],
      flage:true,
    }
  }

  getBook = () => {
    let email = this.props.auth0.user.email;
    let url = `${process.env.REACT_APP_URl}/book?email=${email}`;
    axios.get(url).then((bookResult) => {
      let bookData = bookResult.data;
      // console.log(bookData);
      this.setState({
        data:bookData,
        flage:false

      })
    });
  };

  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated && this.state.flage && this.getBook() }

        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              {this.props.auth0.isAuthenticated ? (
                <MyFavoriteBooks dataBooks={this.state.data} />
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
