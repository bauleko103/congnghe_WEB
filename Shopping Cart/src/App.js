import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Member from "./components/Members";
import Product from "./components/Product";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/carts" exact component={Cart} />
          <Route path="/member" component={Member} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
