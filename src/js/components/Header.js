import React from "react";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      // width: '',
      height: ''
    };
  }

  resizeWindows() {
    this.setState({height: window.innerHeight});
  }

  componentWillMount() {
    this.resizeWindows();
  }

  componentDidMount() {
    var elementHeight = document.getElementById('home');
    elementHeight.style.height = this.state.height+'px';
    window.onresize = () => {
      elementHeight.style.height = this.state.height+'px';
    }
  }

  render() {
    return (
      <div id="home" class="screen-height" ref="screenHeight">
        <div class="home-overlay"></div>
        <div class="intro">
          <h1>pizza to fill your soul</h1>
          <div class="ribbon">it all starts with fresh, weve got something for everyone</div>
        </div>
        <div id="chart" ref="chart"></div>
    	</div>
    );
  }
}
