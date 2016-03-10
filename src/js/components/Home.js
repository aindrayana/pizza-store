import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <section id="home" class="screen-height">
        <div class="home-overlay"></div>
        <div class="intro">
          <h1>pizza to fill your soul</h1>
          <div class="ribbon">it all starts with fresh, we've got something for everyone</div>
        </div>
    	</section>
    );
  }
}
