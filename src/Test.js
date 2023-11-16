import React, { Component } from "react";

export default class Test extends Component {
  render() {
    console.log("This.props : ", this.props);
    return <div>test</div>;
  }
}
