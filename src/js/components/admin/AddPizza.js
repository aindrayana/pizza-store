import React from "react";
import { Link } from "react-router";
import Select from 'react-select';

export default class AddPizza extends React.Component {
  constructor() {
    super();
    this.submitData = this.submitData.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {
      value: [],
      data: []
    };
  }

  componentWillMount() {
    // get all toppings records from firebase then set to data state
    // to populate multiple select control
    var _this = this;
    var tmp = [];
    const firebaseRef = firebase.database().ref("toppings")
    firebaseRef.once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(data){
          tmp.push({
            id: data.key,
            name: data.val().name
          });
          _this.setState({data:tmp})

          // console.log("val:",data.val().name);
          // console.log("key:",data.key);
        });
      });
  }

  componentWillUnmount() {
    firebase.database().ref("toppings").off();
  }

  submitData(e) {
    let ref = this.refs;
    const postsRef = firebase.database().ref("pizza");
    postsRef.push().set({     //-- push record to firebase
      name: ref.name.value,
      desc: ref.desc.value,
      price: ref.price.value,
      toppings: this.refs.toppings.props.value
    });
    this.resetForm(ref);
    alert('Add item success !!');
  }

  resetForm(e) {
    e.name.value='';
    e.desc.value='';
    e.price.value='';
    this.setState({value: ''});
  }

  onSelectChange (value) {
		this.setState({ value });
	}

  render() {
    return (
      <div>
        <div class="content-header">
          <div class="content-title">Add New Item
            <Link to="admin" class="btn btn-default btn-md pull-right">
              <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Back to Index
            </Link>
          </div>
        </div>
        <div class="content">
          <div class="bottom-30"></div>
          <div>
            <label class="">Pizza Name: </label>
            <input type="text" placeholder="Input Pizza Name" ref="name"/>
          </div>
          <div>
            <label class="">Description: </label>
            <textarea ref="desc" placeholder="Input description" />
          </div>
          <div>
            <label class="">Pizza Price: </label>
            <input type="text" placeholder="Input Price" ref="price"/>
          </div>
          <div>
            <label class="">Pizza Toppings: </label>
              <Select multi ref="toppings"
                placeholder="Select your toppings"
                value={this.state.value}
                valueKey="id"
      					labelKey="name"
                onChange={this.onSelectChange}
                options={this.state.data} />
          </div>
          <div class="top-30">
            <button class="btn btn-default btn-md" onClick={this.submitData}>SAVE DATA</button>
          </div>

        </div>
      </div>
    );
  }
}
