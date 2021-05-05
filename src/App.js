import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import About from "./components/about";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import FavouriteMovies from "./components/favouriteMovies";
import LoginForm from "./components/loginForm";
import NotFound from "./components/notFound";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="content">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/favourite" component={FavouriteMovies} />
            <Route path="/customers" component={Customers} />
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Movies} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
