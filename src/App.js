import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Admin from './Pages/Admin/Admin';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <div className="container">
        navbar
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/details">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
