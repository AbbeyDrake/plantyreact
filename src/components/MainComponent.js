import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import LocalShopsComponent from "./LocalShopsComponent";
import PlantCareComponent from "./PlantCareComponent";
import LocalShopInfo from "./LocalShopInfo";
import { LOCALSHOPS } from './LocalShopsList'

class Main extends Component {
  render() {

    const LocalShopWithId = ({match}) => {
      return(
          <LocalShopInfo 
              localshop={LOCALSHOPS.filter(localshop => localshop.id === +match.params.localshopid)[0]}
          />
      );
  };
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomeComponent} />
          <Route exact path='/localshops' component={LocalShopsComponent} />
          <Route path='/localshops/:localshopid' component={LocalShopWithId}/>
          <Route path='/plantcare' component={PlantCareComponent} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
