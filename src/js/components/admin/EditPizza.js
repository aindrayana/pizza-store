import React from "react";
import { Link } from "react-router";
import Select from 'react-select';

export default class EditPizza extends React.Component {
  constructor() {
    super();
    this.submitData = this.submitData.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {
      id: '',
      name: '',
      desc: '',
      price: '',
      value: [],      // --- State for SELECT value
      toppings: []
    };
  }

  componentWillMount() {
    // console.log(this.props.params.id);
    this.setState({id: this.props.params.id});
    this.getPizza();
    this.getToppings();
  }

  componentWillUnmount() {
    firebase.database().ref().off();
  }

  getPizza() {
    var _this = this;
    const pizzaRef = firebase.database().ref("pizza");

    pizzaRef.child(this.props.params.id).on("value", function(snapshot) {
      _this.setState({
        name: snapshot.val().name,
        desc: snapshot.val().desc,
        price: snapshot.val().price
        }
      );

      const toppingList = snapshot.val().toppings.map((item) => {
        // console.log(item);
      	return item;
      });

      if (toppingList) {
        _this.setState({ value: toppingList });
      }

      // console.log(_this.state.value);

    });
  }

  getToppings() {
    var _this = this;
    var tmp = [];
    const firebaseRef = firebase.database().ref("toppings")
    firebaseRef.on('value', function(snapshot) {
        snapshot.forEach(function(data){
          tmp.push({
            id: data.key,
            name: data.val().name
          });

          // console.log("val:",data.val().name);
          // console.log("key:",data.key);
        });

        _this.setState({toppings:tmp})

      });
  }

  submitData(e) {
    let ref = this.refs;
    const postsRef = firebase.database().ref("pizza");
    const onComplete = ((error) => {
      if (error) {
        console.log('Update failed');
      } else {
        console.log('Update succeeded');
        alert('Update success !!');
        postsRef.off();
      }
    });

    postsRef.child(this.props.params.id).set({
    // postsRef.push().set({
      name: ref.name.value,
      desc: ref.desc.value,
      price: ref.price.value,
      toppings: this.refs.toppings.props.value
    }, onComplete);
  }

  onValueChange () {
    this.setState({
      name: this.refs.name.value,
      desc: this.refs.desc.value,
      price: this.refs.price.value
    });
  }

  onSelectChange (value) {
		this.setState({ value });
	}

  render() {
    return (
      <div>
        <div class="content-header">
          <div class="content-title">Edit Item
            <Link to="admin" class="btn btn-default btn-md pull-right">
              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Back to Index
            </Link>
          </div>
        </div>
        <div class="content">
          <div class="bottom-30"></div>
          <div>
            <label class="">Pizza Name: </label>
            <input type="text" placeholder="Input Pizza Name" ref="name" value={this.state.name} onChange={this.onValueChange} />
          </div>
          <div>
            <label class="">Description: </label>
            <textarea ref="desc" placeholder="Input description" value={this.state.desc} rows="5" onChange={this.onValueChange} />
          </div>
          <div>
            <label class="">Pizza Price: </label>
            <input type="text" placeholder="Input Price" ref="price" value={this.state.price} onChange={this.onValueChange} />
          </div>
          <div>
            <label class="">Pizza Toppings: </label>
              <Select multi ref="toppings"
                placeholder="Select your toppings"
                value={this.state.value}
                valueKey="id"
      					labelKey="name"
                onChange={this.onSelectChange}
                options={this.state.toppings} />
          </div>
          <div class="top-30">
            <button class="btn btn-default btn-md" onClick={this.submitData}>UPDATE DATA</button>
          </div>
        </div>
      </div>
    );
  }
}
// reactMixin(EditPizza.prototype, ReactFireMixin)
