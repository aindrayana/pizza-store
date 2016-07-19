// import _ from 'lodash';
import React from "react";
import { Link } from "react-router";
import firebase from "firebase";
import ReactFireMixin from "reactfire";
import reactMixin from "react-mixin";

import ToppingList from "./ToppingList";

export default class Topping extends React.Component {

  constructor() {
    super();
    this.submitData = this.submitData.bind(this);
    this.state = {
      text: '',
      data: []
    };
  }

  componentWillMount() {
    const firebaseRef = firebase.database().ref("toppings")
    this.bindAsArray(firebaseRef, 'data');
  }

  componentWillUnmount() {
    firebase.database().ref("toppings").off();
  }

  onChange(e) {
    // console.log("text: "+e.target.value);
    this.setState({text: e.target.value});
  }

  submitData(e) {
    e.preventDefault();
    // console.log("submit data: ", this.state.text);
    // console.log("refs:", this.refs.topping.value);

    const postsRef = firebase.database().ref("toppings");
    // var postsRef = firebaseRef.child("toppings");
    if (this.state.text) {
      postsRef.push().set({ name: this.state.text });
      this.setState({text: ""});
    }

  }

  onDelete(itemToDelete, key) {
    const firebaseRef = firebase.database().ref("toppings/"+key);
    firebaseRef.remove();
    // console.log("key:"+key);
  }


  render() {
    return (
      <div>
        <div class="content-header">
          <div class="content-title">Toppings
            <Link to="admin" class="btn btn-default btn-md pull-right">
              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Back to Index
            </Link>
          </div>
        </div>
        <div class="content">
            <div class="row">
              <div class="col-sm-4 sidebar">
                <div>
                  <label class="">Add New Topping: </label><br/>
                  <input type="text" placeholder="Input Topping" ref="topping"
                     onChange={ this.onChange.bind(this) } value={ this.state.text }/>
                </div>
                <div class="top-30">
                  <button class="btn btn-default btn-md" onClick={this.submitData}>Add Topping</button>
                </div>

              </div>
              <div class="col-sm-8 pull-right">
                <ToppingList
                  data={this.state.data}
                  deleteItem={this.onDelete.bind(this)} />
              </div>
            </div>

        </div>
      </div>
    );
  }
}

reactMixin(Topping.prototype, ReactFireMixin)
