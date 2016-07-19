import React from "react";
import { Link } from "react-router";
import Reactfire from "reactfire";
import firebase from "firebase";

export default class Topping extends React.Component {

  constructor() {
    super();
    this.submitData = this.submitData.bind(this);
    this.state = {
      text: '',
      topping: []
    };
  }

  componentWillMount() {

    let _this = this;
    const firebaseRef = firebase.database().ref("toppings");

    firebaseRef.once("value", function(snapshot) {
      var toppingsList = [];
      // console.log(snapshot);
      // _this.setState({topping: snapshot})
      // console.log(snapshot.val());
      snapshot.forEach(function(data){
        let toppings = {}
        toppings['.key'] = data.key;
        toppings['topping'] = data.val().name;
        toppingsList.push(toppings);
        // console.log(toppingsList);
        // console.log(data.val());
      });
      // console.log("list:",toppingsList);
      _this.setState({topping: toppingsList});

    });
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
    console.log("submit data: ", this.state.text);
    // console.log("refs:", this.refs.topping.value);


    const firebaseRef = firebase.database().ref();
    var postsRef = firebaseRef.child("toppings");
    if (this.state.text) {
      postsRef.push().set({
        name: this.state.text
      });

      this.setState({
        // itemColumn1: this.state.itemColumn1.concat(column1),
        // column: "CHOOSE COLUMN",
        text: ""
      });

    }

  }

  render() {

    console.log(this.state.topping);

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
          <h4>Home content</h4>
            <div class="row">
              <div class="col-sm-4 sidebar">
                <div>
                  <label class="">Topping: </label><br/>
                  <input type="text" placeholder="Input Topping" ref="topping"
                     onChange={ this.onChange.bind(this) } value={ this.state.text }/>
                </div>
                <div class="top-30">
                  <button class="btn btn-default btn-md" onClick={this.submitData}>Add Topping</button>
                </div>

              </div>
              <div class="col-sm-8 pull-right">list</div>
            </div>



        </div>
      </div>
    );
  }
}
