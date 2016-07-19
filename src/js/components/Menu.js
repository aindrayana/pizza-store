import React from "react";
import firebase from "firebase";

import PizzaList from './PizzaList';

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    var _this = this;
    var tmp = [];

    const firebaseRef = firebase.database().ref("pizza")

    firebaseRef.on("value", function(snapshot) {
      snapshot.forEach(function(data){
        tmp.push(data.val());
      });
      // console.log(snapshot.val());
      _this.setState({items: tmp});
    });
  }

  componentWillUnmount() {
    firebase.database().ref("pizza").off();
  }


  render() {

    // console.log(this.state.items);

    return (
      <section class="block-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="block-section-menu">
                <div class="block-section-menu-header">
                  <h2 class="text-center ui-title-menu">Pizza Menu</h2>
                </div>

                <PizzaList data={this.state.items} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
