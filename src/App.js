import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Admin from './Pages/Admin/Admin';
import Footer from "./Pages/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar";
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/page/:pageNumber">
            <Home />
          </Route>
          <Route  path="/admin">
            <Admin />
          </Route>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
