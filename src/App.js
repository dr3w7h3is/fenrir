import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import './App.css';

import { Home } from "./components/Home";
import { Tiles } from "./components/Tiles";
import { Playlist } from "./components/Playlist";
import { TV_Shows } from "./components/TV_Shows";
import { Login } from "./components/Login"
import { Movie } from "./components/Movie";
import { Manage } from "./components/Manage";
import { getCategories } from "./controller/api";

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDBUpdate = this.handleDBUpdate.bind(this)
    this.state = { categories: [] }
  }
  componentDidMount() {
    this.handleDBUpdate()
  }
  handleDBUpdate() {
    getCategories().then(d => this.setState({ categories: d }))
  }

  render() {
    return (
      <div>
        <div className="w3-bar w3-top w3-black w3-large">
          <span className="w3-bar-item w3-right">FENRIR</span>
          <Link to="/login" className="w3-bar-item w3-right">Login</Link>
        </div>
        <nav className="w3-sidebar w3-collapse w3-light-gray" id="mySidebar">
          <br></br>
          <div className="w3-container">
            <h2>Dashboard</h2>
          </div>
          <div className="w3-bar-block">
            <Link to="/" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-home fa-fw"></i> Home
            </Link>
            <Link to="/movie" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-film fa-fw"></i> Movie
            </Link>
            <Link to="/tv_shows" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-television fa-fw"></i> TV Shows
            </Link>
            <Link to="/playlist" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-list fa-fw"></i> Playlist{" "}
            </Link>
            <Link to="/manage" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-cogs fa-fw"></i> Manage
            </Link>
          </div>
        </nav>
        <div className="w3-main">
          <header className="w3-container">
            <h5>
              <b>FENRIR Media Management System</b>
            </h5>
          </header>
        </div>
        <div className="quick-look w3-row-padding w3-margin-bottom">
          <Tiles categories={this.state.categories} />
        </div>
        <hr></hr>
          <Route exact path="/" component={Home} />
          <Route path="/movie" render={(props) => <Movie onDBUpdate={this.handleDBUpdate} {...props} />} />
          <Route path="/tv_shows" component={TV_Shows} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/manage" render={(props) => <Manage onDBUpdate={this.handleDBUpdate} {...props} />} />
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default App;