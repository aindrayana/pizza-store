import React from "react";
import { Link } from "react-router";

import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";

export default class Layout extends React.Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCqAQx5jaR4mSfKoxIUcokMZZz4AqMijO4",
      authDomain: "pizza-app.firebaseapp.com",
      databaseURL: "https://pizza-app.firebaseio.com",
      storageBucket: "",
    }
    firebase.initializeApp(config)
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <NavBar location={location} />
        <div id="container" class="fixed-header">
          <div id="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
