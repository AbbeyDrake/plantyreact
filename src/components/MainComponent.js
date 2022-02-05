import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import LocalShopsComponent from "./LocalShopsComponent";
import PlantCareComponent from "./PlantCareComponent";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomeComponent} />
          <Route path='/localshops' component={LocalShopsComponent} />
          <Route path='/plantcare' component={PlantCareComponent} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
