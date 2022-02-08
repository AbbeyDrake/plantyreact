import React, { Component } from "react";

class LocalShopInfo extends Component {
 

  render() {
      console.log(this.props);
    return (
      <p>Hello World {this.props.localshop.id}</p>
    //   This is where display of individual local shop will go
    );
  }
}

export default LocalShopInfo;