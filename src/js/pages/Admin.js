import React from "react";
import { Link } from "react-router";
import firebase from "firebase";

// react-mixin: to use bindAsArray reactfire mixins within ES6
import ReactFireMixin from "reactfire";
import reactMixin from "react-mixin";

import PizzaList from "../components/admin/pizzaList";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    const firebaseRef = firebase.database().ref("pizza")
    this.bindAsArray(firebaseRef, 'data');    //-- set firebaseRef array to data state
  }

  componentWillUnmount() {
    firebase.database().ref().off();
  }


  onDelete(key) {
    // ** delete record from firebase -----------------------
    const firebaseRef = firebase.database().ref("pizza/"+key);
    firebaseRef.remove();
    alert('Item Deleted !!')
    // console.log("key:"+key);
    // console.log(itemToDelete + " | column: "+ column);
  }

  render() {

    // console.log(this.state.data);
    return (
      <div>
        <div class="content-header">
          <div class="content-title">Pizza Admin Page
            <Link to="admin/topping" class="btn btn-default btn-md pull-right">
              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Topping
            </Link>
            <Link to="admin/add" class="btn btn-default btn-md pull-right">
              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Pizza
            </Link>
          </div>
        </div>
        <div class="content">
          <h4>Pizza List</h4>
          <div class="row border table-background div-table">
            <div class="col-sm-1">No</div>
            <div class="col-sm-2">Pizza Name</div>
            <div class="col-sm-4">Description</div>
            <div class="col-sm-1">Price</div>
            <div class="col-sm-3">Toppings</div>
            <div class="col-sm-1">Action</div>
          </div>
          <PizzaList
            data={this.state.data}
            deleteItem={this.onDelete.bind(this)} />
        </div>
      </div>
    );
  }
}

reactMixin(Main.prototype, ReactFireMixin)
