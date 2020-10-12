import React, { Component } from "react";
import Checkout from "./screens/checkout/Checkout";
import Details from "./screens/details/Details";
import Profile from "./screens/profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./common/header/Header";
import Home from "./screens/home/Home.js";

// App component for controlling all routes
class App extends Component {
  constructor(props) {
    super();
    this.state = { searchtext: "" };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    console.log = console.warn = console.error = () => {};
  }
  handleSearchChange(srchtxt) {
    this.setState({ searchtext: srchtxt }, this.filterCards);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/">
            <Header searchhandler={this.handleSearchChange}></Header>
          </Route>
          <Switch>
            <Route path="/" exact>
              <Home searchtxt={this.state.searchtext} />
            </Route>
            { /* if url is /details/restaurantid then load Details component with restaurant details*/}
            <Route
              path="/details/:restaurantid"
              exact
              component={(props) => <Details {...props} />}
            />
            { /* if url is /checkout then load Checkout component */}
            <Route
              path="/checkout"
              component={(props) => <Checkout {...props} />}
            />
            { /* if url is /details then load Home component */}
            <Route
              path="/details"
              exact
              component={(props) => <Home {...props} />}
            />
            { /* if url is /profile then load Profile component */}
            <Route
              path="/profile"
              component={(props) => <Profile {...props} />}
            />
            { /* if url is /home then load Home component */}
            <Route path="/home" component={(props) => <Home {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
