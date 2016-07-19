import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import '../assets/css/layout.scss';

import Index from "./pages/Index";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AdminIndex from "./pages/Admin";
  import AddPizza from "./components/admin/AddPizza";
  import EditPizza from "./components/admin/EditPizza";
  import Topping from "./components/admin/Topping";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Router path="admin" name="admin" component={Index} >
        <IndexRoute component={AdminIndex} />
        <Route path="add" name="add" component={AddPizza} />
        <Route path="edit/:id" name="edit" component={EditPizza} />
        <Route path="topping" name="topping" component={Topping} />
      </Router>
    </Router>
  </Router>,
app);
