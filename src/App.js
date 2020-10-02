import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import './App.css';

import { Home } from "./components/Home";
import { CheckOut } from "./components/CheckOut";
import { Calendar } from "./components/Calendar";
import { Login } from "./components/Login"
import { Equipment } from "./components/Equipment";
import { Manage } from "./components/Manage";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { categories: [] }
  }

  render() {
    return (
      <div>
        <div className="w3-bar w3-top w3-black w3-large">
          <span className="w3-bar-item w3-right">MCTSSA</span>
          <Link to="/login" className="w3-bar-item w3-right">Login</Link>
        </div>
        <nav className="w3-sidebar w3-collapse w3-light-gray" id="mySidebar">
          <br></br>
          <div className="w3-container">
            <h5>Dashboard</h5>
          </div>
          <div className="w3-bar-block">
            <Link to="/" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-home fa-fw"></i> Home
            </Link>
            <Link to="/equipment" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-cubes fa-fw"></i> Equipment
            </Link>
            <Link to="/calendar" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-calendar fa-fw"></i> Calendar
            </Link>
            <Link to="/checkout" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-check-square fa-fw"></i> CheckOut{" "}
            </Link>
            <Link to="/manage" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-table fa-fw"></i> Manage
            </Link>
          </div>
        </nav>
        <div className="w3-main">
          <header className="w3-container">
            <h5>
              <b>MCNEL Inventory Management System</b>
            </h5>
          </header>
        </div>
        <div className="quick-look w3-row-padding w3-margin-bottom">
        </div>
        <hr></hr>
          <Route exact path="/" component={Home} />
          <Route path="/equipment" render={(props) => <Equipment onDBUpdate={this.handleDBUpdate} {...props} />} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/manage" render={(props) => <Manage onDBUpdate={this.handleDBUpdate} {...props} />} />
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default App;