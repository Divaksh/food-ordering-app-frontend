import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./common/header/Header";
import Home from "./screens/home/Home.js";

class App extends Component {
  constructor(props) {
    super();
    this.state = { searchtext: "" };
    this.handleSearchChange = this.handleSearchChange.bind(this);
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
            <Route path="/checkout" component={Checkout} />
            <Route path="/details" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
